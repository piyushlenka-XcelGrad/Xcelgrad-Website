import React, { useEffect, useState, useMemo } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Search,
  Filter,
  Building2,
  X,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeadButton from '../../components/common/HeadButton';
import toast from 'react-hot-toast';

import api from '../../api'; 

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter States
  const [selectedLocations, setSelectedLocations] = useState([]); 
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]); 
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // --- Experience Categories ---
  const EXP_LEVELS = [
    'Entry Level (0-2 years)', 
    'Mid Level (3-5 years)', 
    'Senior (6-10 years)', 
    'Executive (10+ years)'
  ];
  
  // --- Dynamic Salary Ranges Definition ---
  const SALARY_RANGES = [
    { label: '1 - 6 Lakhs', min: 0, max: 600000 },
    { label: '7 - 15 Lakhs', min: 600001, max: 1500000 },
    { label: '15 - 30 Lakhs', min: 1500001, max: 3000000 },
    { label: '30+ Lakhs', min: 3000001, max: Infinity }
  ];

  const navigate = useNavigate();

  // --- API INTEGRATION ---
  useEffect(() => {
    const fetchActiveJobs = async () => {
      try {
        setLoading(true);
        const response = await api.get("/jobs/active");
        setJobs(response.data || []); 
      } catch (err) {
        console.error("API Error:", err);
        setJobs([]); 
      } finally {
        setLoading(false);
      }
    };
    
    fetchActiveJobs();
  }, []);

  // --- HELPER: Extract & Split Locations ---
  const extractLocations = (locationString) => {
    if (!locationString) return [];
    // Split by comma, slash, " and ", " & " (case insensitive)
    return locationString
      .split(/,|\/|\s+and\s+|\s+&\s+/i)
      .map(loc => loc.trim())
      .filter(loc => loc !== "");
  };

  // --- SMART PARSER: Experience ---
  const parseExperience = (expString) => {
    if (!expString) return null;
    const str = String(expString).toLowerCase();
    
    // Catch freshers and N/A strings
    if (str.includes('fresher') || str.includes('n/a') || str === '0') {
      return { min: 0, max: 0 };
    }
    
    const isMonths = str.includes('month');
    
    // Extracts integers AND floats, ignoring dashes or words
    const match = str.match(/\d+(?:\.\d+)?/g);
    if (!match) return null;
    
    let nums = match.map(Number);
    
    // Convert isolated months into years
    if (isMonths) {
      nums = nums.map(n => n / 12);
    }
    
    let eMin = nums[0];
    // If there's a second number, that's max. If it has a '+', set a high max. Otherwise, max = min.
    let eMax = nums.length > 1 ? nums[1] : (str.includes('+') ? 99 : nums[0]);
    
    // Failsafe sort just in case string was formatted backwards
    if (eMin > eMax) {
      const temp = eMin; eMin = eMax; eMax = temp;
    }
    return { min: eMin, max: eMax };
  };

  // --- SMART PARSER: Salary ---
  const parseSalary = (amountStr, typeStr) => {
    const str1 = String(amountStr || '').toLowerCase();
    const str2 = String(typeStr || '').toLowerCase();
    const fullStr = `${str1} ${str2}`;
    
    if (!fullStr.trim() || fullStr.includes('confidential')) return null;

    const cleanForNums = fullStr.replace(/,/g, '');
    const numMatches = cleanForNums.match(/\d+(?:\.\d+)?/g);
    if (!numMatches) return null;

    const nums = numMatches.map(Number);
    let sMin = nums[0];
    let sMax = nums.length > 1 ? nums[1] : nums[0];
    
    if (sMin > sMax) {
        const temp = sMin; sMin = sMax; sMax = temp;
    }

    const cleanStr = fullStr.replace(/[^a-z]/g, ''); 
    
    const isLPA = /lpa|lakh|lac/.test(cleanStr);
    const isMonthly = /month|pm/.test(cleanStr);
    const isK = /k/.test(cleanStr); 

    if (isLPA) {
        sMin *= 100000;
        sMax *= 100000;
    } else if (isMonthly) {
        if (isK && sMax < 1000) {
            sMin *= 1000;
            sMax *= 1000;
        }
        sMin *= 12;
        sMax *= 12;
    } else if (isK && !isMonthly) {
        sMin *= 1000;
        sMax *= 1000;
    } else if (sMax > 0 && sMax <= 100) { 
        sMin *= 100000;
        sMax *= 100000;
    }

    return { min: sMin, max: sMax };
  };

  // --- DYNAMIC LOCATION EXTRACTION ---
  const uniqueLocations = useMemo(() => {
    const locations = jobs
      .flatMap(job => extractLocations(job.location))
      .filter(Boolean); 
    
    return [...new Set(locations)].sort();
  }, [jobs]);


  // --- CORE FILTERING LOGIC ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // 1. Search Filter
      const matchesSearch = job.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company?.toLowerCase().includes(searchQuery.toLowerCase());
                            
      // 2. Location Filter (using the new splitter)
      const matchesLocation = selectedLocations.length === 0 || 
                              (job.location && extractLocations(job.location).some(loc => selectedLocations.includes(loc)));
      
      // 3. Experience Overlap Filter
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.some(level => {
        const jobExp = parseExperience(job.experience_bracket); 
        if (!jobExp) return false; 
        
        let fMin = 0, fMax = 99;
        if (level === 'Entry Level (0-2 years)') { fMin = 0; fMax = 2; }
        else if (level === 'Mid Level (3-5 years)') { fMin = 3; fMax = 5; }
        else if (level === 'Senior (6-10 years)') { fMin = 6; fMax = 10; }
        else if (level === 'Executive (10+ years)') { fMin = 11; fMax = 99; }
        
        return jobExp.min <= fMax && jobExp.max >= fMin;
      });

      // 4. Salary Overlap Filter
      const matchesSalary = selectedSalaryRanges.length === 0 || selectedSalaryRanges.some(selectedLabel => {
        const rangeDef = SALARY_RANGES.find(r => r.label === selectedLabel);
        if (!rangeDef) return false;

        const jobSal = parseSalary(job.salary_amount, job.salary_type);
        if (!jobSal) return false; 

        return jobSal.min <= rangeDef.max && jobSal.max >= rangeDef.min;
      });

      return matchesSearch && matchesLocation && matchesLevel && matchesSalary;
    });
  }, [jobs, searchQuery, selectedLocations, selectedLevels, selectedSalaryRanges]);


  // --- UI HANDLERS ---
  const toggleFilter = (item, selectedList, setList) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedLevels([]);
    setSelectedSalaryRanges([]); 
    setSearchQuery("");
  };



  const hasActiveFilters = selectedLocations.length > 0 || selectedLevels.length > 0 || selectedSalaryRanges.length > 0 || searchQuery !== "";

  return (
    <div className="min-h-screen mt-16 overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#e0e7ff]/50 to-transparent -z-10 pointer-events-none" />

      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 pb-24 relative z-10">
        
        {/* Hero Section */}
        <section className="py-12 sm:py-20 text-center">
          <HeadButton text="Hiring Platform"/>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              B2B Sales <span className="text-indigo-600">Opportunities</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
           Curated roles across B2B industries, aligned to structured execution expectations
          </p>
          
          <div className="max-w-[700px] mx-auto relative group px-2 sm:px-0">
            <Search className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={22} />
            <input 
              type="text"
              placeholder="Search jobs by title, skill, or company..."
              className="w-full pl-14 sm:pl-16 pr-6 py-4 bg-white border border-slate-200 rounded-full text-sm sm:text-[16px] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4 flex justify-between items-center">
          <p className="text-slate-600 font-medium">{filteredJobs.length} Jobs Found</p>
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <Filter size={16} />
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
            {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-blue-600 ml-1"></span>}
          </button>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Filters Sidebar */}
          <aside className={`w-full lg:w-[280px] flex-shrink-0 transition-all duration-300 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                  <Filter size={20} className="text-blue-600" />
                  Filters
                </div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-sm text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors">
                    <X size={14} /> Clear
                  </button>
                )}
              </div>

              {/* DYNAMIC LOCATION FILTER */}
              {uniqueLocations.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Location</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                    {uniqueLocations.map((location) => (
                      <label key={location} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center shrink-0">
                          <input 
                            type="checkbox" 
                            checked={selectedLocations.includes(location)}
                            onChange={() => toggleFilter(location, selectedLocations, setSelectedLocations)}
                            className="peer appearance-none w-5 h-5 bg-white border border-2 border-solid border-slate-900 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400 shadow-sm"
                          />
                          <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                            <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="text-sm sm:text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors break-words">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Level Filter */}
              <div className="mb-8">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Experience</h3>
                <div className="space-y-3">
                  {EXP_LEVELS.map((level) => (
                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center shrink-0">
                        <input 
                          type="checkbox" 
                          checked={selectedLevels.includes(level)}
                          onChange={() => toggleFilter(level, selectedLevels, setSelectedLevels)}
                          className="peer appearance-none w-5 h-5 bg-white border border-2 border-solid border-slate-900 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400 shadow-sm"
                        />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm sm:text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors break-words">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dynamic Salary Filter */}
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Salary Range</h3>
                <div className="space-y-3 mt-4">
                  {SALARY_RANGES.map((range) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center shrink-0">
                        <input 
                          type="checkbox" 
                          checked={selectedSalaryRanges.includes(range.label)}
                          onChange={() => toggleFilter(range.label, selectedSalaryRanges, setSelectedSalaryRanges)}
                          className="peer appearance-none w-5 h-5 bg-white border border-2 border-solid border-slate-900 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400 shadow-sm"
                        />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-sm sm:text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors break-words">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Job Listings Column */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">
            


            {/* Jobs List */}
            {loading ? (
              <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center text-slate-500 flex flex-col items-center shadow-sm">
                <div className="w-8 h-8 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                <p className="font-medium">Loading opportunities...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id} 
                    className="bg-white border-2 border-slate-100 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300"
                  >


                    {/* Job Info */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-3">
                        <div className="flex items-start gap-3 min-w-0">

                          
                          <div className="min-w-0">
                            <h3 
                              onClick={() => navigate(`/app/jobs/${job.id}`)}
                              className="text-lg sm:text-[19px] font-bold text-slate-900 leading-tight mb-1.5 hover:text-blue-600 cursor-pointer transition-colors break-words"
                            >
                              {job.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm sm:text-[15px] font-medium text-slate-600">
                              <Building2 size={16} className="text-slate-400 shrink-0" />
                              <span className="truncate">{job.industry || "Company Name"}</span>
                            </div>
                          </div>
                        </div>
                        
                        <span className="inline-flex items-center justify-center bg-blue-50 text-blue-700 border border-blue-100 text-xs sm:text-[13px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap self-start shrink-0">
                          {job?.type}
                        </span>
                      </div>

                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 sm:gap-y-3 mt-2 sm:mt-4 mb-4 text-xs sm:text-[14px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 min-w-0">
                          <MapPin size={14} className="text-slate-400 shrink-0" />
                          <span className="truncate max-w-[120px] sm:max-w-none">{job.location || "Location not specified"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 shrink-0">
                          {job.salary_amount ? `${job.salary_amount} ${job.salary_type ? `/ ${job.salary_type}` : ""}` : "Confidential"}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 shrink-0">
                          <Briefcase size={14} className="text-slate-400 shrink-0" />
                          {job.experience_bracket || "Experience N/A"}
                        </div>
                      </div>

                      {/* View Details Button */}
                      <div className="mt-auto flex justify-end w-full sm:w-auto">
                        <button 
                          onClick={() => navigate(`/app/jobs/${job.id}`)} 
                          className="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl sm:rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all shadow-md shadow-slate-200 hover:shadow-blue-200 group shrink-0"
                        >
                          View Details 
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-8 sm:p-16 text-center text-slate-500 shadow-sm flex flex-col items-center">
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                  <Search className="text-slate-400" size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No jobs found</h3>
                <p className="text-sm sm:text-base px-4">Try adjusting your search criteria or clearing some filters.</p>
                <button onClick={clearFilters} className="mt-6 text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-all">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;