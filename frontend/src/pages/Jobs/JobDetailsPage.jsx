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
  IndianRupee
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../api";

const InfoBadge = ({ icon: Icon, label }) => {
  if (!label) return null;
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm font-semibold shadow-sm">
      <Icon size={16} className="text-indigo-600" />
      <span>{label}</span>
    </div>
  );
};

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

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("user_token");
      if (token) {
        try {
          const profileRes = await api.get("/website/profile/me");
          setProfile(profileRes.data);

          const statusRes = await api.get(`/website/jobs/${id}/check-application`);
          setHasApplied(statusRes.data.applied);
        } catch (err) {
          console.error("User data fetch error. Token might be expired.");
        }
      }
    };
    
    fetchUserData();
    fetchJobDetails();
  }, [id, fetchJobDetails]);

  const handleQuickApply = async () => {
    const token = localStorage.getItem("user_token");
    
    if (!token) {
      toast("Please sign in to apply for this job.", { icon: "👋" });
      navigate("/auth"); 
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

  // Reusable CSS classes for formatting ReactQuill HTML output gracefully
  const htmlContentClasses = `
    text-slate-600 leading-relaxed break-words w-full
    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:mt-2
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:mt-2
    [&_li]:mb-1.5 [&_li::marker]:text-slate-400
    [&_p]:mb-4 last:[&_p]:mb-0
    [&_strong]:font-bold [&_b]:font-bold text-slate-800
    [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-slate-900
    [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:text-slate-900
    [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:text-slate-900
    [&_a]:text-indigo-600 [&_a]:underline hover:[&_a]:text-indigo-800
    [&_table]:w-full [&_table]:mb-4 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg
  `;

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
                {job.industry && (
                  <span className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {job.industry}
                  </span>
                )}
                {job.job_id && (
                  <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-semibold rounded-full">
                    Ref: #{job.job_id}
                  </span>
                )}
              </div>

              {job.name && (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  {job.name}
                </h1>
              )}

              <div className="flex flex-wrap gap-3">
                {job.location && <InfoBadge icon={MapPin} label={job.location} />}
                {job.experience_bracket && <InfoBadge icon={Briefcase} label={job.experience_bracket} />}
                {job.salary_amount && (
                  <InfoBadge 
                    icon={IndianRupee} 
                    label={`${job.salary_amount}${job.salary_type ? ` / ${job.salary_type}` : ""}`} 
                  />
                )}
              </div>
            </header>

            {/* Description (Rich Text HTML) */}
            {job.description && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-indigo-600" />
                  Role Description
                </h3>
                <div 
                  className={htmlContentClasses}
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </div>
            )}

            {/* Skills (Comma-Separated Grid) */}
            {job.key_skills && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Zap className="text-indigo-600" />
                  Expertise Required
                </h3>
                
                {/* Parse comma-separated skills and display them with CheckMarks */}
                <div className="flex flex-wrap gap-3 mt-2">
                  {job.key_skills.split(",").map((skill, index) => {
                    const trimmedSkill = skill.trim();
                    if (!trimmedSkill) return null; // Skip empty strings 

                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                      >
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        <span className="font-semibold text-slate-700 text-sm">
                          {trimmedSkill}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </section>

          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-8">
            <div className="lg:sticky lg:top-8 space-y-8">

              {(job.positions || job.interview_rounds || job.joining_preference) && (
                <div className="relative overflow-hidden rounded-3xl bg-white text-black shadow-2xl border border-slate-800">
                  <div className="relative p-6 sm:p-8">
                    <div className="mb-8">
                      <h4 className="text-xl font-extrabold tracking-tight">Position Details</h4>
                      <p className="text-black text-sm mt-1">Key information about this opportunity</p>
                    </div>

                    <div className="divide-y divide-slate-800 border-y border-slate-800">
                      {job.positions && (
                        <div className="flex items-center justify-between py-4">
                          <span className="text-black text-sm">Total Openings</span>
                          <span className="font-bold text-black text-lg">{job.positions}</span>
                        </div>
                      )}
                      {job.interview_rounds && (
                        <div className="flex items-center justify-between py-4">
                          <span className="text-black text-sm">Interview Rounds</span>
                          <span className="font-semibold">{job.interview_rounds}</span>
                        </div>
                      )}
                      {job.joining_preference && (
                        <div className="flex items-center justify-between py-4">
                          <span className="text-black text-sm">Notice Period</span>
                          <span className="font-semibold text-emerald-400">{job.joining_preference}</span>
                        </div>
                      )}
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
                           "⚡ Apply Now (1-Click)"
                        )}
                      </button>

                      {/* {job.google_form_id && !hasApplied && (
                        <a href={job.google_form_id} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 text-sm text-slate-600 font-semibold hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors border border-slate-200">
                          Or apply via External Form
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <User size={22} />
                </div>
                <h5 className="font-bold text-slate-900 text-lg mb-1">Hiring Support</h5>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Need clarification about the hiring process, interview stages, or role expectations? Our talent team is ready to assist you.
                </p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=xcelgrad@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition"
                >
                  Contact Support →
                </a>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default JobDetailsPage;