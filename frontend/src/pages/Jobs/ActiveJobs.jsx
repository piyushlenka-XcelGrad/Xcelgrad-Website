
// import React, { useEffect, useState, useMemo } from 'react';
// import { 
//   MapPin, 
//   Briefcase, 
//   ArrowRight, 
//   Search,
//   Timer,
//   ChevronRight,
//   Filter,
//   Sparkles,
//   Building2,
//   DollarSign,
//   Clock,
//   ExternalLink
// } from 'lucide-react';
// import axios from "axios"
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';

// // Mock Component replacements for HeadButton/Content since they aren't provided
// const Badge = ({ children, className = "" }) => (
//   <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${className}`}>
//     {children}
//   </span>
// );



// const App = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");


//  const handleEmail = () => {
//   const email = "sgivamsharma06@gmail.com";
//   const subject = "Application for Opportunities";
//   const body = "Hello,\n\nI would like to apply for future opportunities.\n\nRegards,";

//   window.location.href =
//     `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
// };


//   // Simulated API fetch with fallback data for preview
//   useEffect(() => {
//     const fetchActiveJobs = async () => {
//       try {
//         setLoading(true);
//         // const response = await axios.get("http://127.0.0.1:8000/api/v1/jobs/active");
//         const response = await api.get("/jobs/active");
//         setJobs(response.data || []);
//       } catch (err) {
//         console.error("API Error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchActiveJobs();
//   }, []);
//   const navigate = useNavigate();

//   const categories = useMemo(() => ["All", ...new Set(jobs.map(j => j.industry))], [jobs]);

//   const filteredJobs = useMemo(() => {
//     return jobs.filter(job => {
//       const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                            job.location.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesCategory = selectedCategory === "All" || job.industry === selectedCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [jobs, searchQuery, selectedCategory]);

//   return (
//     <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
//       {/* Decorative Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[100px]" />
//       </div>

//       <main className="relative z-10">
//         {/* Header/Hero Section */}
//         <section className="pt-24 pb-12 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col items-center text-center space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full animate-fade-in">
//                 <Sparkles size={14} className="animate-pulse" />
//                 <span className="text-xs font-bold uppercase tracking-widest">Global Talent Network</span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl">
//                 Build the future with <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">visionaries.</span>
//               </h1>
              
//               <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
//                 Connect with industry-leading enterprises and world-class talent. 
//                 Your journey towards the next career milestone starts here.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Filter & Search Bar */}
//         <section className="sticky top-0 z-30 py-6 px-6 backdrop-blur-md bg-white/70 border-b border-slate-100 transition-all">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//               {/* Search */}
//               <div className="relative w-full md:max-w-md group">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
//                 <input 
//                   type="text"
//                   placeholder="Search roles, locations, or skills..."
//                   className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-sm"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>

//               {/* Categories */}
//               <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
//                 <Filter size={18} className="text-slate-400 mr-2 flex-shrink-0" />
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => setSelectedCategory(cat)}
//                     className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
//                       selectedCategory === cat 
//                       ? "bg-slate-900 text-white shadow-lg shadow-slate-200" 
//                       : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-100"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Content Section */}
//         <section className="py-16 px-6 min-h-[600px]">
//           <div className="max-w-7xl mx-auto">
//             {/* Stats Summary */}
//             <div className="flex items-center justify-between mb-10">
//               <h2 className="text-xl font-bold flex items-center gap-3">
//                 Current Openings
//                 <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-sm font-black">
//                   {filteredJobs.length}
//                 </span>
//               </h2>
//             </div>

//             {loading ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[1, 2, 3, 4, 5, 6].map((n) => (
//                   <div key={n} className="h-64 bg-white border border-slate-100 rounded-[32px] animate-pulse p-8 flex flex-col gap-4">
//                     <div className="w-12 h-12 bg-slate-100 rounded-2xl" />
//                     <div className="h-6 w-3/4 bg-slate-100 rounded-lg" />
//                     <div className="h-4 w-1/2 bg-slate-100 rounded-lg" />
//                     <div className="mt-auto h-12 w-full bg-slate-100 rounded-2xl" />
//                   </div>
//                 ))}
//               </div>
//             ) : filteredJobs.length > 0 ? (
//               <div className="grid grid-cols-1 bg-blue-600/5 p-2 lg:p-10 lg:grid-cols-2 gap-8">
//                 {filteredJobs.map((job) => (
//                   <div 
//                     key={job.id}
//                     className="group flex flex-col md:flex-row bg-white  border border-slate-200/60 rounded-[32px] p-3 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_-16px_rgba(79,70,229,0.15)] hover:border-indigo-300/50 hover:-translate-y-1"
//                   >
//                     {/* Visual Side */}
//                     <div className="md:w-48 bg-slate-50 border border-slate-100/50 rounded-[28px] p-8 flex items-center justify-center transition-all duration-500 group-hover:bg-indigo-50/40 group-hover:border-indigo-100/50">
//                       <div className="w-16 h-16 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-200 group-hover:rotate-3 transition-all duration-500 shadow-sm">
//                         <Building2 size={32} strokeWidth={1.5} />
//                       </div>
//                     </div>

//                     {/* Content Side */}
//                     <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
//                       <div>
//                         <div className="flex items-center justify-between mb-3">
//                           <Badge className="bg-indigo-600 text-white px-4 py-1.5 shadow-md shadow-indigo-100">
//                             {job.industry}
//                           </Badge>
//                           <div className="flex items-center gap-1.5 text-slate-500 font-bold text-[10px] tracking-widest uppercase">
//                             <Clock size={12} className="text-indigo-500" /> {job.joining_preference}
//                           </div>
//                         </div>
                        
//                         <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors leading-tight">
//                           {job.name}
//                         </h3>

//                         <div className="grid grid-cols-2 gap-4 mb-8">
//                           <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
//                             <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
//                               <MapPin size={18} className="text-indigo-500" />
//                             </div>
//                             {job.location}
//                           </div>
//                           <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
//                             <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
//                               <DollarSign size={18} className="text-indigo-500" />
//                             </div>
//                             {job.salary_amount}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex items-center justify-between pt-6 border-t border-slate-100">
//                         <div className="flex flex-col">
//                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Experience</span>
//                           <span className="text-sm font-bold text-slate-700">
//                             {job.experience_bracket}
//                           </span>
//                         </div>
//                         <button  onClick={() => navigate(`/app/jobs/${job.id}`)} className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 hover:-translate-x-1">
//                           View Details <ArrowRight size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-32 bg-slate-50/50 rounded-[48px] border-2 border-dashed border-slate-200">
//                 <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-slate-200/50">
//                   <Search size={40} className="text-slate-200" />
//                 </div>
//                 <h3 className="text-3xl font-black text-slate-900 mb-4">No results found</h3>
//                 <p className="text-slate-500 max-w-sm mx-auto font-medium mb-8">
//                   We couldn't find any positions matching "{searchQuery}". Try expanding your filters.
//                 </p>
//                 <button 
//                   onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
//                   className="px-8 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm"
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Footer CTA */}
//         <section className="pb-24 px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="relative bg-slate-900 rounded-[48px] p-12 md:p-20 overflow-hidden group">
//               {/* Background Glow */}
//               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700" />
              
//               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//                 <div className="text-center md:text-left">
//                   <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
//                     Don't see the <br /><span className="text-indigo-400">right fit?</span>
//                   </h2>
//                   <p className="text-slate-400 text-lg font-medium max-w-md">
//                     We're always looking for exceptional talent to join our mission. 
//                     Send us your CV and we'll keep you in mind.
//                   </p>
//                 </div>
                
//                 <button onClick={handleEmail} className="flex cursor-pointer items-center gap-4 bg-white text-slate-900 px-10 py-6 rounded-3xl font-black text-lg transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 shadow-2xl">
                  
//                   General Application
//                   <ExternalLink size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out forwards;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}} />
//     </div>
//   );
// };

// export default App;





// import React, { useEffect, useState, useMemo } from 'react';
// import { 
//   MapPin, 
//   Briefcase, 
//   Search,
//   Filter,
//   Building2,
//   DollarSign,
//   X,
//   ArrowRight // <-- Added ArrowRight import
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const App = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
  
//   // Filter States
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [selectedLevels, setSelectedLevels] = useState([]);
  
//   // Selection States
//   const [selectedJobIds, setSelectedJobIds] = useState([]);

//   const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];
//   const EXP_LEVELS = ['Entry Level', 'Mid Level', 'Senior', 'Executive'];

//   const fallbackJobs = [
//     {
//       id: 1,
//       name: "Marketing Manager",
//       company: "TechCorp",
//       location: "Bangalore",
//       salary_amount: "$ 800000 / yearly",
//       experience_level: "Senior",
//       experience_bracket: "5-7 Years",
//       description: "Lead our marketing efforts and drive growth across global markets.",
//       type: "Full-time"
//     },
//     {
//       id: 2,
//       name: "Sales Executive",
//       company: "XcelGrad",
//       location: "Mumbai",
//       salary_amount: "$ 500000 / yearly",
//       experience_level: "Entry Level",
//       experience_bracket: "0-2 Years",
//       description: "Drive sales, expand our customer base, and build lasting client relationships.",
//       type: "Contract"
//     },
//     {
//       id: 3,
//       name: "Frontend Developer",
//       company: "InnovateJS",
//       location: "Remote",
//       salary_amount: "$ 120000 / yearly",
//       experience_level: "Mid Level",
//       experience_bracket: "3-5 Years",
//       description: "Build beautiful, responsive user interfaces using React and TailwindCSS.",
//       type: "Full-time"
//     }
//   ];

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchActiveJobs = async () => {
//       try {
//         setLoading(true);
//         // const response = await api.get("/jobs/active");
//         // setJobs(response.data || fallbackJobs);
        
//         setTimeout(() => {
//           setJobs(fallbackJobs);
//           setLoading(false);
//         }, 800);
//       } catch (err) {
//         console.error("API Error:", err);
//         setJobs(fallbackJobs);
//         setLoading(false);
//       }
//     };
//     fetchActiveJobs();
//   }, []);

//   const filteredJobs = useMemo(() => {
//     return jobs.filter(job => {
//       const matchesSearch = job.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                             job.company?.toLowerCase().includes(searchQuery.toLowerCase());
//       const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
//       const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(job.experience_level);

//       return matchesSearch && matchesType && matchesLevel;
//     });
//   }, [jobs, searchQuery, selectedTypes, selectedLevels]);

//   const toggleFilter = (item, selectedList, setList) => {
//     setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
//   };

//   const clearFilters = () => {
//     setSelectedTypes([]);
//     setSelectedLevels([]);
//     setSearchQuery("");
//   };

//   const handleSelectAll = () => {
//     if (selectedJobIds.length === filteredJobs.length && filteredJobs.length > 0) {
//       setSelectedJobIds([]);
//     } else {
//       setSelectedJobIds(filteredJobs.map(job => job.id));
//     }
//   };

//   const handleSelectJob = (id) => {
//     setSelectedJobIds(prev => prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]);
//   };

//   const hasActiveFilters = selectedTypes.length > 0 || selectedLevels.length > 0 || searchQuery !== "";

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
//       <main className="max-w-[1200px] mx-auto px-6 pb-24">
        
//         {/* Hero Section */}
//         <section className="py-20 text-center">
//           <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Hiring Platform</span>
//           <h1 className="text-[44px] font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
//             Find Your Next Opportunity
//           </h1>
//           <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
//             Browse thousands of job openings from top companies and fast-growing startups. Filter by role, experience, and job type.
//           </p>
          
//           <div className="max-w-[700px] mx-auto relative group">
//             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={22} />
//             <input 
//               type="text"
//               placeholder="Search jobs by title, skill, or company..."
//               className="w-full pl-16 pr-6 py-4 bg-white border border-slate-200 rounded-full text-[16px] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 shadow-sm transition-all"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </section>

//         {/* Content Grid */}
//         <div className="flex flex-col lg:flex-row gap-8 mt-4">
          
//           {/* Filters Sidebar */}
//           <aside className="w-full lg:w-[280px] flex-shrink-0">
//             <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm sticky top-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
//                   <Filter size={20} className="text-blue-600" />
//                   Filters
//                 </div>
//                 {hasActiveFilters && (
//                   <button onClick={clearFilters} className="text-sm text-slate-500 hover:text-red-500 flex items-center gap-1 transition-colors">
//                     <X size={14} /> Clear
//                   </button>
//                 )}
//               </div>

//               {/* Job Type Filter */}
//               <div className="mb-8">
//                 <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Job Type</h3>
//                 <div className="space-y-3">
//                   {JOB_TYPES.map((type) => (
//                     <label key={type} className="flex items-center gap-3 cursor-pointer group">
//                       <div className="relative flex items-center justify-center">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedTypes.includes(type)}
//                           onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
//                           className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all"
//                         />
//                         <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
//                           <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </div>
//                       <span className="text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{type}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Experience Level Filter */}
//               <div>
//                 <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Experience</h3>
//                 <div className="space-y-3">
//                   {EXP_LEVELS.map((level) => (
//                     <label key={level} className="flex items-center gap-3 cursor-pointer group">
//                       <div className="relative flex items-center justify-center">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedLevels.includes(level)}
//                           onChange={() => toggleFilter(level, selectedLevels, setSelectedLevels)}
//                           className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all"
//                         />
//                         <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
//                           <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </div>
//                       <span className="text-[15px] text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{level}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Job Listings Column */}
//           <div className="flex-1 space-y-5">
            
//             {/* Action Bar */}
//             <div className="bg-white border border-slate-200 rounded-2xl p-4 px-6 flex flex-wrap items-center justify-between shadow-sm gap-4">
//               <label className="flex items-center gap-3 cursor-pointer group">
//                 <div className="relative flex items-center justify-center">
//                   <input 
//                     type="checkbox" 
//                     checked={filteredJobs.length > 0 && selectedJobIds.length === filteredJobs.length}
//                     onChange={handleSelectAll}
//                     disabled={filteredJobs.length === 0}
//                     className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-[6px] checked:bg-slate-800 checked:border-slate-800 disabled:opacity-50 cursor-pointer transition-all"
//                   />
//                   <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
//                     <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="text-[15px] text-slate-700 font-semibold select-none">Select All Results</span>
//               </label>

//               <div className="flex items-center gap-4">
//                 <span className="text-[14px] text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
//                   {selectedJobIds.length} selected
//                 </span>
//                 <button 
//                   disabled={selectedJobIds.length === 0}
//                   className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-[14px] font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm"
//                 >
//                   Apply Selected
//                 </button>
//               </div>
//             </div>

//             {/* Jobs List */}
//             {loading ? (
//               <div className="p-12 text-center text-slate-500 flex flex-col items-center">
//                 <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
//                 <p>Loading opportunities...</p>
//               </div>
//             ) : filteredJobs.length > 0 ? (
//               <div className="space-y-4">
//                 {filteredJobs.map((job) => (
//                   <div 
//                     key={job.id} 
//                     className={`bg-white border-2 rounded-2xl p-6 flex gap-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
//                       selectedJobIds.includes(job.id) ? 'border-blue-400 bg-blue-50/30' : 'border-slate-100'
//                     }`}
//                   >
//                     {/* Checkbox */}
//                     <div className="pt-1">
//                       <div className="relative flex items-center justify-center">
//                         <input 
//                           type="checkbox" 
//                           checked={selectedJobIds.includes(job.id)}
//                           onChange={() => handleSelectJob(job.id)}
//                           className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all"
//                         />
//                         <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
//                           <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Job Info */}
//                     <div className="flex-1 flex flex-col">
//                       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-3">
//                         <div>
//                           <h3 className="text-[19px] font-bold text-slate-900 leading-tight mb-1.5 hover:text-blue-600 cursor-pointer transition-colors">
//                             {job.name}
//                           </h3>
//                           <div className="flex items-center gap-2 text-[15px] font-medium text-slate-600">
//                             <Building2 size={16} className="text-slate-400" />
//                             {job.company}
//                           </div>
//                         </div>
//                         <span className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-100 text-[13px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
//                           {job.type || "Full-time"}
//                         </span>
//                       </div>

//                       <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 mb-4 text-[14px] text-slate-600 font-medium">
//                         <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
//                           <MapPin size={16} className="text-slate-400" />
//                           {job.location}
//                         </div>
//                         <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
//                           <DollarSign size={16} className="text-emerald-500" />
//                           {job.salary_amount}
//                         </div>
//                         <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
//                           <Briefcase size={16} className="text-slate-400" />
//                           {job.experience_bracket}
//                         </div>
//                       </div>

//                       <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
//                         {job.description}
//                       </p>

//                       {/* NEW: View Details Button - Aligned to the bottom right */}
//                       <div className="mt-auto flex justify-end">
//                         <button 
//                           onClick={() => navigate(`/app/jobs/${job.id}`)} 
//                           className="inline-flex cursor-pointer items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200 hover:shadow-indigo-200 hover:translate-x-1"
//                         >
//                           View Details <ArrowRight size={16} />
//                         </button>
//                       </div>

//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-16 text-center text-slate-500 shadow-sm flex flex-col items-center">
//                 <Search className="text-slate-300 mb-4" size={48} />
//                 <h3 className="text-lg font-bold text-slate-900 mb-2">No jobs found</h3>
//                 <p>Try adjusting your search or clearing some filters.</p>
//                 <button onClick={clearFilters} className="mt-6 text-blue-600 font-semibold hover:underline">
//                   Clear all filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };
import React, { useEffect, useState, useMemo } from 'react';
import { 
  MapPin, 
  Briefcase, 
  Search,
  Filter,
  Building2,
  DollarSign,
  X,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeadButton from '../../components/common/HeadButton';

// Ensure your API instance is correctly imported
import api from '../../api'; 

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter States
  const [selectedLocations, setSelectedLocations] = useState([]); 
  const [selectedLevels, setSelectedLevels] = useState([]);
  
  // Salary Filter States
  const [salaryFormat, setSalaryFormat] = useState('All'); // 'All', 'Yearly', or 'Monthly'
  const [selectedSalaryRanges, setSelectedSalaryRanges] = useState([]); 
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedJobIds, setSelectedJobIds] = useState([]);

  // --- UPDATED: Experience Categories ---
  const EXP_LEVELS = [
    'Entry Level (0-2 years)', 
    'Mid Level (3-5 years)', 
    'Senior (6-10 years)', 
    'Executive (10+ years)'
  ];
  
  // --- UPDATED: Dynamic Salary Ranges Definition ---
  const SALARY_RANGES = {
    Yearly: [
      { label: '0 - 6 Lakhs', min: 0, max: 600000 },
      { label: '7 - 15 Lakhs', min: 600001, max: 1500000 },
      { label: '15 - 30 Lakhs', min: 1500001, max: 3000000 },
      { label: '30+ Lakhs', min: 3000001, max: Infinity }
    ],
    Monthly: [
      { label: '0k - 5k', min: 0, max: 5000 },
      { label: '5k - 10k', min: 5001, max: 10000 },
      { label: '10k - 25k', min: 10001, max: 25000 },
      { label: '25k+', min: 25001, max: Infinity }
    ]
  };

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

  // --- HELPERS ---
  const getExperienceYears = (expString) => {
    if (!expString) return -1;
    const normalized = String(expString).toLowerCase().replace(/\s/g, ''); 
    if (normalized.includes('fresher')) return 0;
    const match = normalized.match(/(\d+)/); 
    return match ? parseInt(match[0], 10) : -1;
  };

  // Extracts just the number from the amount (e.g., 500000)
  const getSalaryNumber = (salaryAmount) => {
    if (salaryAmount === undefined || salaryAmount === null) return -1;
    const match = String(salaryAmount).replace(/[^0-9]/g, '');
    return match ? parseInt(match, 10) : -1;
  };

  // --- DYNAMIC LOCATION EXTRACTION ---
  const uniqueLocations = useMemo(() => {
    const locations = jobs
      .map(job => job.location?.trim())
      .filter(Boolean); 
    
    return [...new Set(locations)].sort();
  }, [jobs]);

  // --- FILTERING LOGIC ---
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // 1. Search Filter
      const matchesSearch = job.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company?.toLowerCase().includes(searchQuery.toLowerCase());
                            
      // 2. Location Filter
      const matchesLocation = selectedLocations.length === 0 || 
                              (job.location && selectedLocations.includes(job.location.trim()));
      
      // 3. UPDATED: Experience Filter Logic 
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.some(level => {
        const years = getExperienceYears(job.experience_bracket); 
        if (years === -1) return false; 
        switch (level) {
          case 'Entry Level (0-2 years)': return years >= 0 && years <= 2;
          case 'Mid Level (3-5 years)': return years >= 3 && years <= 5;  
          case 'Senior (6-10 years)': return years >= 6 && years <= 10;     
          case 'Executive (10+ years)': return years > 10;               
          default: return false;
        }
      });

      // 4. Salary Filter 
      let matchesSalary = true;
      
      if (salaryFormat !== 'All') {
        const isCorrectFormat = job.salary_type && job.salary_type.toLowerCase().includes(salaryFormat.toLowerCase());
        
        if (!isCorrectFormat) {
          matchesSalary = false; 
        } else if (selectedSalaryRanges.length > 0) {
          const salaryNum = getSalaryNumber(job.salary_amount);
          
          matchesSalary = selectedSalaryRanges.some(selectedLabel => {
            const rangeDef = SALARY_RANGES[salaryFormat].find(r => r.label === selectedLabel);
            if (!rangeDef) return false;
            return salaryNum >= rangeDef.min && salaryNum <= rangeDef.max;
          });
        }
      }

      return matchesSearch && matchesLocation && matchesLevel && matchesSalary;
    });
  }, [jobs, searchQuery, selectedLocations, selectedLevels, salaryFormat, selectedSalaryRanges]);

  const toggleFilter = (item, selectedList, setList) => {
    setList(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  const handleSalaryFormatChange = (format) => {
    setSalaryFormat(format);
    setSelectedSalaryRanges([]); 
  };

  const clearFilters = () => {
    setSelectedLocations([]);
    setSelectedLevels([]);
    setSalaryFormat('All'); 
    setSelectedSalaryRanges([]); 
    setSearchQuery("");
  };

  const handleSelectAll = () => {
    if (selectedJobIds.length === filteredJobs.length && filteredJobs.length > 0) {
      setSelectedJobIds([]);
    } else {
      setSelectedJobIds(filteredJobs.map(job => job.id));
    }
  };

  const handleSelectJob = (id) => {
    setSelectedJobIds(prev => prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]);
  };

  const hasActiveFilters = selectedLocations.length > 0 || selectedLevels.length > 0 || salaryFormat !== 'All' || searchQuery !== "";

  return (
    <div className="min-h-screen mt-16 overflow-x-hidden bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#e0e7ff]/50 to-transparent -z-10 pointer-events-none" />

      <main className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 pb-24 relative z-10">
        
        {/* Hero Section */}
        <section className="py-12 sm:py-20 text-center">
          <HeadButton text="Hiring Platform"/>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Find Your Next <span className="text-indigo-600"> Opportunity</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Browse thousands of job openings from top companies and fast-growing startups. Filter by role, experience, and job type.
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
                            className="peer appearance-none w-5 h-5 bg-black border-black border-2 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400"
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
                          className="peer appearance-none w-5 h-5 bg-black border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400"
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
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Salary Format</h3>
                
                {/* Format Toggle Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-lg mb-4">
                  <button
                    className={`flex-1 py-1.5 text-xs sm:text-[13px] font-semibold rounded-md transition-all ${salaryFormat === 'All' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    onClick={() => handleSalaryFormatChange('All')}
                  >All</button>
                  <button
                    className={`flex-1 py-1.5 text-xs sm:text-[13px] font-semibold rounded-md transition-all ${salaryFormat === 'Yearly' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    onClick={() => handleSalaryFormatChange('Yearly')}
                  >Yearly</button>
                  <button
                    className={`flex-1 py-1.5 text-xs sm:text-[13px] font-semibold rounded-md transition-all ${salaryFormat === 'Monthly' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    onClick={() => handleSalaryFormatChange('Monthly')}
                  >Monthly</button>
                </div>

                {/* Range Checkboxes (Only shows when Yearly or Monthly is selected) */}
                {salaryFormat !== 'All' && (
                  <div className="space-y-3 mt-4">
                    {SALARY_RANGES[salaryFormat].map((range) => (
                      <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center shrink-0">
                          <input 
                            type="checkbox" 
                            checked={selectedSalaryRanges.includes(range.label)}
                            onChange={() => toggleFilter(range.label, selectedSalaryRanges, setSelectedSalaryRanges)}
                            className="peer appearance-none w-5 h-5 bg-black border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400"
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
                )}
              </div>

            </div>
          </aside>

          {/* Job Listings Column */}
          <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">
            
            {/* Action Bar */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center shrink-0">
                  <input 
                    type="checkbox" 
                    checked={filteredJobs.length > 0 && selectedJobIds.length === filteredJobs.length}
                    onChange={handleSelectAll}
                    disabled={filteredJobs.length === 0}
                    className="peer appearance-none w-5 h-5 bg-white border-2 border-slate-300 rounded-[6px] checked:bg-slate-800 checked:border-slate-800 disabled:opacity-50 cursor-pointer transition-all hover:border-slate-400"
                  />
                  <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm sm:text-[15px] text-slate-700 font-semibold select-none">Select All Results</span>
              </label>

              <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                <span className="text-xs sm:text-[14px] text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-full shrink-0">
                  {selectedJobIds.length} selected
                </span>
                <button 
                  disabled={selectedJobIds.length === 0}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl transition-all shadow-sm w-full sm:w-auto shrink-0"
                >
                  Apply Selected
                </button>
              </div>
            </div>

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
                    className={`bg-white border-2 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300 ${
                      selectedJobIds.includes(job.id) ? 'border-blue-400 bg-blue-50/20' : 'border-slate-100'
                    }`}
                  >
                    {/* Desktop Checkbox */}
                    <div className="hidden sm:block pt-1 shrink-0">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          checked={selectedJobIds.includes(job.id)}
                          onChange={() => handleSelectJob(job.id)}
                          className="peer appearance-none w-5 h-5 bg-white border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400"
                        />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    {/* Job Info */}
                    <div className="flex-1 flex flex-col min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          {/* Mobile Checkbox */}
                          <div className="sm:hidden pt-1 shrink-0">
                            <div className="relative flex items-center justify-center">
                              <input 
                                type="checkbox" 
                                checked={selectedJobIds.includes(job?.id)}
                                onChange={() => handleSelectJob(job?.id)}
                                className="peer appearance-none w-5 h-5 bg-white border-2 border-slate-300 rounded-[6px] checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all hover:border-blue-400"
                              />
                              <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 14 10" fill="none">
                                <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                          
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 leading-tight mb-1.5 hover:text-blue-600 cursor-pointer transition-colors break-words">
                              {job.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm sm:text-[15px] font-medium text-slate-600">
                              <Building2 size={16} className="text-slate-400 shrink-0" />
                              <span className="truncate">{job.industry || "Company Name"}</span>
                            </div>
                          </div>
                        </div>
                        
                        <span className="inline-flex items-center justify-center bg-blue-50 text-blue-700 border border-blue-100 text-xs sm:text-[13px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap self-start shrink-0">
                          {job.type || "Full-time"}
                        </span>
                      </div>

                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 sm:gap-y-3 mt-2 sm:mt-4 mb-4 text-xs sm:text-[14px] text-slate-600 font-medium">
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 min-w-0">
                          <MapPin size={14} className="text-slate-400 shrink-0" />
                          <span className="truncate max-w-[120px] sm:max-w-none">{job.location || "Location not specified"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 shrink-0">
                          <DollarSign size={14} className="text-emerald-500 shrink-0" />
                          {job.salary_amount ? `${job.salary_amount} ${job.salary_type ? `/ ${job.salary_type}` : ""}` : "Confidential"}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-50 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-100 shrink-0">
                          <Briefcase size={14} className="text-slate-400 shrink-0" />
                          {job.experience_bracket || "Experience N/A"}
                        </div>
                      </div>

                      {/* Description Output */}
                      {job.description ? (
                        <div 
                          className="line-clamp-3 text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-6 [&>ul]:list-disc [&>ul]:ml-5 [&>ol]:list-decimal [&>ol]:ml-5 [&_strong]:font-semibold [&_strong]:text-slate-700 [&_em]:italic [&_u]:underline space-y-2 break-words overflow-hidden"
                          dangerouslySetInnerHTML={{ __html: job.description }}
                        />
                      ) : (
                        <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed mb-6 break-words">
                          No description provided for this job.
                        </p>
                      )}

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