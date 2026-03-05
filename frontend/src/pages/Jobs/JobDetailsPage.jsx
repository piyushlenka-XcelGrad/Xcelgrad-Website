// import React, { useEffect, useState, useCallback } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   Briefcase,
//   ChevronLeft,
//   ShieldCheck,
//   Zap,
//   CheckCircle2,
//   CircleDollarSign,
//   User,
//   AlertCircle,
//   Loader2,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import api from "../../api"; // Assuming your api utility has the interceptor configured

// /* -------------------- Reusable Components -------------------- */

// const InfoBadge = ({ icon: Icon, label }) => (
//   <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-semibold shadow-sm">
//     <Icon size={16} className="text-indigo-600" />
//     <span>{label}</span>
//   </div>
// );

// const SkeletonLoader = () => (
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
//     <div className="h-6 w-40 bg-slate-200 rounded mb-8" />
//     <div className="grid lg:grid-cols-3 gap-10">
//       <div className="lg:col-span-2 space-y-6">
//         <div className="h-12 bg-slate-200 rounded-xl w-3/4" />
//         <div className="h-64 bg-slate-200 rounded-3xl" />
//       </div>
//       <div className="h-96 bg-slate-200 rounded-3xl" />
//     </div>
//   </div>
// );

// /* -------------------- Main Component -------------------- */

// const JobDetailsPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [state, setState] = useState({
//     job: null,
//     loading: true,
//     error: null,
//   });

//   // --- NEW: Profile and Application States ---
//   const [profile, setProfile] = useState(null);
//   const [applying, setApplying] = useState(false);
//   const [hasApplied, setHasApplied] = useState(false);

//   const fetchJobDetails = useCallback(async () => {
//     try {
//       setState((p) => ({ ...p, loading: true }));
//       const { data } = await api.get(`/jobs/${id}`);
//       setState({ job: data, loading: false, error: null });
//     } catch (err) {
//       setState({
//         job: null,
//         loading: false,
//         error:
//           err.response?.data?.message ||
//           "Failed to load job details. Please try again.",
//       });
//     }
//   }, [id]);

//   // --- NEW: Fetch Profile if user is logged in ---
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       const token = localStorage.getItem("user_token");
//       if (token) {
//         try {
//           // This silently fetches the profile to check completion %
//           const response = await api.get("/website/profile/me");
//           setProfile(response.data);
//         } catch (err) {
//           console.error("User not logged in or token expired.");
//         }
//       }
//     };
//     fetchUserProfile();
//     fetchJobDetails();
//   }, [fetchJobDetails]);

//   // --- NEW: Quick Apply Logic ---
//   const handleQuickApply = async () => {
//     const token = localStorage.getItem("user_token");
    
//     // 1. Check if logged in
//     if (!token) {
//       toast("Please sign in to apply for this job.", { icon: "👋" });
//       navigate("/auth"); // Adjust this if your auth route is named differently
//       return;
//     }

//     // 2. Check if profile is loaded and >= 90%
//     const score = profile?.profile_completion_score || 0;
//     if (score < 90) {
//       toast.error(`Your profile is only ${score}% complete. Please complete at least 90% to use Quick Apply.`);
//       navigate("/profile");
//       return;
//     }

//     // 3. Process Application
//     setApplying(true);
//     try {
//       // NOTE: You will need to create this route on your FastAPI backend!
//       await api.post(`/website/jobs/${id}/apply`); 
      
//       setHasApplied(true);
//       toast.success("Application submitted successfully!");
//     } catch (err) {
//       toast.error(err.response?.data?.detail || "Failed to submit application. Please try again.");
//     } finally {
//       setApplying(false);
//     }
//   };

//   if (state.loading) return <SkeletonLoader />;

//   if (state.error || !state.job)
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
//         <AlertCircle size={48} className="text-red-500 mb-4" />
//         <h2 className="text-2xl font-bold text-slate-900 mb-2">
//           Something went wrong
//         </h2>
//         <p className="text-slate-600 mb-6 max-w-md">{state.error}</p>
//         <button
//           onClick={() => navigate("/careers")}
//           className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
//         >
//           Back to Careers
//         </button>
//       </div>
//     );

//   const { job } = state;

//   return (
//     <main className="bg-slate-50 min-h-screen py-10 mt-16 sm:py-14">
//       <div className="absolute inset-0 h-[420px] bg-gradient-to-b from-indigo-100/40 to-transparent pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 cursor-pointer text-slate-600 hover:text-indigo-600 font-semibold mb-8 group"
//         >
//           <ChevronLeft
//             size={18}
//             className="group-hover:-translate-x-1 cursor-pointer transition"
//           />
//           Back to Opportunities
//         </button>

//         <div className="grid lg:grid-cols-3 gap-10 xl:gap-14">
//           <section className="lg:col-span-2 space-y-10">
//             {/* Header */}
//             <header className="space-y-6">
//               <div className="flex flex-wrap gap-3">
//                 <span className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
//                   {job.industry || "General"}
//                 </span>
//                 <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-semibold rounded-full">
//                   Ref: #{job.job_id || id.slice(0, 8)}
//                 </span>
//               </div>

//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//                 {job.name}
//               </h1>

//               <div className="flex flex-wrap gap-3">
//                 <InfoBadge icon={MapPin} label={job.location} />
//                 <InfoBadge icon={Briefcase} label={job.experience_bracket} />
//                 <InfoBadge icon={CircleDollarSign} label={job.salary_amount} />
//               </div>
//             </header>

//             {/* Description */}
//             <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
//               <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <ShieldCheck className="text-indigo-600" />
//                 Role Description
//               </h3>

//               <div className="w-full min-w-0">
//                 <div className="overflow-x-auto pb-2">
//                   <div
//                     className="
//                       prose max-w-none text-slate-600 
//                       break-words [word-break:break-word]
//                       [&_table]:w-full [&_table]:mb-4
//                       [&_img]:max-w-full [&_img]:h-auto
//                     "
//                     dangerouslySetInnerHTML={{ __html: job.description }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Skills */}
//             <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
//               <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
//                 <Zap className="text-indigo-600" />
//                 Expertise Required
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {job.key_skills?.split(",").map((skill, i) => (
//                   <span
//                     key={i}
//                     className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700"
//                   >
//                     <CheckCircle2 size={16} className="text-emerald-500" />
//                     {skill.trim()}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* ---------------- Sidebar ---------------- */}
//           <aside className="space-y-8">
//             <div className="lg:sticky lg:top-8 space-y-8">

//               {/* -------- Position Details Card -------- */}
//               <div className="relative overflow-hidden rounded-3xl bg-white text-black shadow-2xl border border-slate-800">
//                 <div className="relative p-6 sm:p-8">
//                   <div className="mb-8">
//                     <h4 className="text-xl font-extrabold tracking-tight">
//                       Position Details
//                     </h4>
//                     <p className="text-black text-sm mt-1">
//                       Key information about this opportunity
//                     </p>
//                   </div>

//                   <div className="divide-y divide-slate-800 border-y border-slate-800">
//                     <div className="flex items-center justify-between py-4">
//                       <span className="text-black text-sm">Total Openings</span>
//                       <span className="font-bold text-black text-lg">{job.positions}</span>
//                     </div>

//                     <div className="flex items-center justify-between py-4">
//                       <span className="text-black text-sm">Interview Rounds</span>
//                       <span className="font-semibold">{job.interview_rounds}</span>
//                     </div>

//                     <div className="flex items-center justify-between py-4">
//                       <span className="text-black text-sm">Notice Period</span>
//                       <span className="font-semibold text-emerald-400">{job.joining_preference}</span>
//                     </div>
//                   </div>

//                   {/* --- CTA Section --- */}
//                   <div className="mt-8 space-y-3">
                    
//                     {/* Quick Apply Button */}
//                     <button
//                       onClick={handleQuickApply}
//                       disabled={applying || hasApplied}
//                       className={`block w-full text-center py-3.5 text-white font-bold tracking-wide rounded-xl transition-all shadow-lg active:scale-[0.98] ${
//                         hasApplied 
//                           ? 'bg-emerald-500 shadow-emerald-500/40 cursor-not-allowed' 
//                           : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/40 hover:shadow-indigo-900/60'
//                       }`}
//                     >
//                       {applying ? (
//                         <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" size={20}/> Applying...</span>
//                       ) : hasApplied ? (
//                         <span className="flex items-center justify-center gap-2"><CheckCircle2 size={20} /> Applied Successfully</span>
//                       ) : (
//                          "⚡ Quick Apply (1-Click)"
//                       )}
//                     </button>

//                     {/* Secondary External Link (Fallback) */}
//                     {job.google_form_id && !hasApplied && (
//                       <a
//                         href={job.google_form_id}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="block w-full text-center py-3 text-sm text-slate-600 font-semibold hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors border border-slate-200"
//                       >
//                         Or apply via External Form
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* -------- Hiring Support Card -------- */}
//               <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
//                 <div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
//                   <User size={22} />
//                 </div>
//                 <h5 className="font-bold text-slate-900 text-lg mb-1">
//                   Hiring Support
//                 </h5>
//                 <p className="text-sm text-slate-600 leading-relaxed">
//                   Need clarification about the hiring process, interview stages,
//                   or role expectations? Our talent team is ready to assist you.
//                 </p>
//                 <button className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition">
//                   Contact Support →
//                 </button>
//               </div>

//             </div>
//           </aside>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default JobDetailsPage;



import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  ChevronLeft,
  ShieldCheck,
  Zap,
  CheckCircle2,
  CircleDollarSign,
  User,
  AlertCircle,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../api"; 

/* -------------------- Reusable Components -------------------- */
const InfoBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-semibold shadow-sm">
    <Icon size={16} className="text-indigo-600" />
    <span>{label}</span>
  </div>
);

const SkeletonLoader = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
    <div className="h-6 w-40 bg-slate-200 rounded mb-8" />
    <div className="grid lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="h-12 bg-slate-200 rounded-xl w-3/4" />
        <div className="h-64 bg-slate-200 rounded-3xl" />
      </div>
      <div className="h-96 bg-slate-200 rounded-3xl" />
    </div>
  </div>
);

/* -------------------- Main Component -------------------- */
const JobDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState({
    job: null,
    loading: true,
    error: null,
  });

  const [profile, setProfile] = useState(null);
  const [applying, setApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const fetchJobDetails = useCallback(async () => {
    try {
      setState((p) => ({ ...p, loading: true }));
      const { data } = await api.get(`/jobs/${id}`);
      setState({ job: data, loading: false, error: null });
    } catch (err) {
      setState({
        job: null,
        loading: false,
        error: err.response?.data?.message || "Failed to load job details. Please try again.",
      });
    }
  }, [id]);

  // --- UPDATED: Fetch Profile AND Application Status ---
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("user_token");
      if (token) {
        try {
          // 1. Fetch the profile to check completion %
          const profileRes = await api.get("/website/profile/me");
          setProfile(profileRes.data);

          // 2. Fetch the application status for this specific job
          const statusRes = await api.get(`/website/jobs/${id}/check-application`);
          setHasApplied(statusRes.data.applied); // Sets to true if they already applied
        } catch (err) {
          console.error("User data fetch error. Token might be expired.");
        }
      }
    };
    
    fetchUserData();
    fetchJobDetails();
  }, [id, fetchJobDetails]);

  // --- Quick Apply Logic ---
  const handleQuickApply = async () => {
    const token = localStorage.getItem("user_token");
    
    if (!token) {
      toast("Please sign in to apply for this job.", { icon: "👋" });
      navigate("/login"); 
      return;
    }

    const score = profile?.profile_completion_score || 0;
    if (score < 90) {
      toast.error(`Your profile is only ${score}% complete. Please complete at least 90% to use Quick Apply.`);
      navigate("/profile");
      return;
    }

    setApplying(true);
    try {
      await api.post(`/website/jobs/${id}/apply`); 
      setHasApplied(true);
      toast.success("Application submitted successfully!");
    } catch (err) {
      toast.error(err.response?.data?.detail || "Failed to submit application. Please try again.");
    } finally {
      setApplying(false);
    }
  };

  if (state.loading) return <SkeletonLoader />;

  if (state.error || !state.job)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong</h2>
        <p className="text-slate-600 mb-6 max-w-md">{state.error}</p>
        <button onClick={() => navigate("/careers")} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
          Back to Careers
        </button>
      </div>
    );

  const { job } = state;

  return (
    <main className="bg-slate-50 min-h-screen py-10 mt-16 sm:py-14">
      <div className="absolute inset-0 h-[420px] bg-gradient-to-b from-indigo-100/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 cursor-pointer text-slate-600 hover:text-indigo-600 font-semibold mb-8 group">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 cursor-pointer transition" />
          Back to Opportunities
        </button>

        <div className="grid lg:grid-cols-3 gap-10 xl:gap-14">
          <section className="lg:col-span-2 space-y-10">
            {/* Header */}
            <header className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {job.industry || "General"}
                </span>
                <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-semibold rounded-full">
                  Ref: #{job.job_id || id.slice(0, 8)}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                {job.name}
              </h1>

              <div className="flex flex-wrap gap-3">
                <InfoBadge icon={MapPin} label={job.location} />
                <InfoBadge icon={Briefcase} label={job.experience_bracket} />
                <InfoBadge icon={CircleDollarSign} label={job.salary_amount} />
              </div>
            </header>

            {/* Description */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="text-indigo-600" />
                Role Description
              </h3>

              <div className="w-full min-w-0">
                <div className="overflow-x-auto pb-2">
                  <div className="prose max-w-none text-slate-600 break-words [word-break:break-word] [&_table]:w-full [&_table]:mb-4 [&_img]:max-w-full [&_img]:h-auto"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="text-indigo-600" />
                Expertise Required
              </h3>

              <div className="flex flex-wrap gap-3">
                {job.key_skills?.split(",").map((skill, i) => (
                  <span key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-8">
            <div className="lg:sticky lg:top-8 space-y-8">

              <div className="relative overflow-hidden rounded-3xl bg-white text-black shadow-2xl border border-slate-800">
                <div className="relative p-6 sm:p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-extrabold tracking-tight">Position Details</h4>
                    <p className="text-black text-sm mt-1">Key information about this opportunity</p>
                  </div>

                  <div className="divide-y divide-slate-800 border-y border-slate-800">
                    <div className="flex items-center justify-between py-4">
                      <span className="text-black text-sm">Total Openings</span>
                      <span className="font-bold text-black text-lg">{job.positions}</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-black text-sm">Interview Rounds</span>
                      <span className="font-semibold">{job.interview_rounds}</span>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-black text-sm">Notice Period</span>
                      <span className="font-semibold text-emerald-400">{job.joining_preference}</span>
                    </div>
                  </div>

                  {/* --- CTA Section --- */}
                  <div className="mt-8 space-y-3">
                    <button
                      onClick={handleQuickApply}
                      disabled={applying || hasApplied}
                      className={`block w-full text-center py-3.5 text-white font-bold tracking-wide rounded-xl transition-all shadow-lg active:scale-[0.98] ${
                        hasApplied 
                          ? 'bg-emerald-500 shadow-emerald-500/40 cursor-not-allowed' 
                          : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/40 hover:shadow-indigo-900/60'
                      }`}
                    >
                      {applying ? (
                        <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" size={20}/> Applying...</span>
                      ) : hasApplied ? (
                        <span className="flex items-center justify-center gap-2"><CheckCircle2 size={20} /> Already Applied</span>
                      ) : (
                         "⚡ Quick Apply (1-Click)"
                      )}
                    </button>

                    {job.google_form_id && !hasApplied && (
                      <a href={job.google_form_id} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 text-sm text-slate-600 font-semibold hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors border border-slate-200">
                        Or apply via External Form
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <User size={22} />
                </div>
                <h5 className="font-bold text-slate-900 text-lg mb-1">Hiring Support</h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Need clarification about the hiring process, interview stages, or role expectations? Our talent team is ready to assist you.
                </p>
                <button className="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition">
                  Contact Support →
                </button>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsPage;