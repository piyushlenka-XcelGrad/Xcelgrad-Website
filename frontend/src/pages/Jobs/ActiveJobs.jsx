
import React, { useEffect, useState, useMemo } from 'react';
import { 
  MapPin, 
  Briefcase, 
  ArrowRight, 
  Search,
  Timer,
  ChevronRight,
  Filter,
  Sparkles,
  Building2,
  DollarSign,
  Clock,
  ExternalLink
} from 'lucide-react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

// Mock Component replacements for HeadButton/Content since they aren't provided
const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);



const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


 const handleEmail = () => {
  const email = "sgivamsharma06@gmail.com";
  const subject = "Application for Opportunities";
  const body = "Hello,\n\nI would like to apply for future opportunities.\n\nRegards,";

  window.location.href =
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};


  // Simulated API fetch with fallback data for preview
  useEffect(() => {
    const fetchActiveJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:8000/api/v1/jobs/active");
        setJobs(response.data || []);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActiveJobs();
  }, []);
  const navigate = useNavigate();

  const categories = useMemo(() => ["All", ...new Set(jobs.map(j => j.industry))], [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           job.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || job.industry === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [jobs, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10">
        {/* Header/Hero Section */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full animate-fade-in">
                <Sparkles size={14} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Global Talent Network</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl">
                Build the future with <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">visionaries.</span>
              </h1>
              
              <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
                Connect with industry-leading enterprises and world-class talent. 
                Your journey towards the next career milestone starts here.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-0 z-30 py-6 px-6 backdrop-blur-md bg-white/70 border-b border-slate-100 transition-all">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                <input 
                  type="text"
                  placeholder="Search roles, locations, or skills..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                <Filter size={18} className="text-slate-400 mr-2 flex-shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat 
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
                      : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 min-h-[600px]">
          <div className="max-w-7xl mx-auto">
            {/* Stats Summary */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold flex items-center gap-3">
                Current Openings
                <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-sm font-black">
                  {filteredJobs.length}
                </span>
              </h2>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="h-64 bg-white border border-slate-100 rounded-[32px] animate-pulse p-8 flex flex-col gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-2xl" />
                    <div className="h-6 w-3/4 bg-slate-100 rounded-lg" />
                    <div className="h-4 w-1/2 bg-slate-100 rounded-lg" />
                    <div className="mt-auto h-12 w-full bg-slate-100 rounded-2xl" />
                  </div>
                ))}
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 bg-blue-600/5 p-2 lg:p-10 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="group flex flex-col md:flex-row bg-white  border border-slate-200/60 rounded-[32px] p-3 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_-16px_rgba(79,70,229,0.15)] hover:border-indigo-300/50 hover:-translate-y-1"
                  >
                    {/* Visual Side */}
                    <div className="md:w-48 bg-slate-50 border border-slate-100/50 rounded-[28px] p-8 flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-50/40 group-hover:border-indigo-100/50">
                      <div className="w-16 h-16 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                        <Building2 size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-indigo-600 text-white px-4 py-1.5 shadow-md shadow-indigo-100">
                            {job.industry}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[10px] tracking-widest uppercase">
                            <Clock size={12} className="text-indigo-500" /> {job.joining_preference}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors leading-tight">
                          {job.name}
                        </h3>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                              <MapPin size={18} className="text-indigo-500" />
                            </div>
                            {job.location}
                          </div>
                          <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                              <DollarSign size={18} className="text-indigo-500" />
                            </div>
                            {job.salary_amount}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Experience</span>
                          <span className="text-sm font-bold text-slate-700">
                            {job.experience_bracket}
                          </span>
                        </div>
                        <button  onClick={() => navigate(`/app/jobs/${job.id}`)} className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 hover:-translate-x-1">
                          View Details <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-slate-50/50 rounded-[48px] border-2 border-dashed border-slate-200">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-200/50">
                  <Search size={40} className="text-slate-200" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">No results found</h3>
                <p className="text-slate-500 max-w-sm mx-auto font-medium mb-8">
                  We couldn't find any positions matching "{searchQuery}". Try expanding your filters.
                </p>
                <button 
                  onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
                  className="px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-slate-900 rounded-[48px] p-12 md:p-20 overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Don't see the <br /><span className="text-indigo-400">right fit?</span>
                  </h2>
                  <p className="text-slate-400 text-lg font-medium max-w-md">
                    We're always looking for exceptional talent to join our mission. 
                    Send us your CV and we'll keep you in mind.
                  </p>
                </div>
                
                <button onClick={handleEmail} className="flex cursor-pointer items-center gap-4 bg-white text-slate-900 px-10 py-6 rounded-3xl font-black text-lg transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-2xl">
                  
                  General Application
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default App;