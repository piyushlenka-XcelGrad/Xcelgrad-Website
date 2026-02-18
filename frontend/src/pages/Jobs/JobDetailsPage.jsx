import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Briefcase,
  ChevronLeft,
  Share2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  CircleDollarSign,
  User,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

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

  const fetchJobDetails = useCallback(async () => {
    try {
      setState((p) => ({ ...p, loading: true }));
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api/v1"}/jobs/${id}`
      );
      setState({ job: data, loading: false, error: null });
    } catch (err) {
      setState({
        job: null,
        loading: false,
        error:
          err.response?.data?.message ||
          "Failed to load job details. Please try again.",
      });
    }
  }, [id]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  if (state.loading) return <SkeletonLoader />;

  if (state.error || !state.job)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-slate-600 mb-6 max-w-md">{state.error}</p>
        <button
          onClick={() => navigate("/careers")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Back to Careers
        </button>
      </div>
    );

  const { job } = state;

  return (
    <main className="bg-slate-50 min-h-screen py-10 mt-16 sm:py-14">
      {/* Background Gradient */}
      <div className="absolute inset-0 h-[420px] bg-gradient-to-b from-indigo-100/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 cursor-pointer text-slate-600 hover:text-indigo-600 font-semibold mb-8 group"
        >
          <ChevronLeft
            size={18}
            className="group-hover:-translate-x-1 cursor-pointer transition"
          />
          Back to Opportunities
        </button>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-10 xl:gap-14">
          {/* ---------------- Main Content ---------------- */}
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
                <InfoBadge
                  icon={Briefcase}
                  label={job.experience_bracket}
                />
                <InfoBadge
                  icon={CircleDollarSign}
                  label={job.salary_amount}
                />
              </div>
            </header>

            {/* Description */}
            <div className="bg-white border  border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="text-indigo-600" />
                Role Description
              </h3>

             <div className="w-full min-w-0"> {/* Prevents flex-child expansion */}
  <div className="overflow-x-auto pb-2"> {/* Allows internal scrolling for tables */}
    <div
      className="
        prose max-w-none text-slate-600 
        break-words [word-break:break-word]
        [&_table]:w-full [&_table]:mb-4
        [&_img]:max-w-full [&_img]:h-auto
      "
      dangerouslySetInnerHTML={{ __html: job.description }}
    /></div>
  </div>
</div>

            {/* Skills */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="text-indigo-600" />
                Expertise Required
              </h3>

              <div className="flex flex-wrap gap-3">
                {job.key_skills
                  ?.split(",")
                  .map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500"
                      />
                      {skill.trim()}
                    </span>
                  ))}
              </div>
            </div>
          </section>
{/* ---------------- Sidebar ---------------- */}
<aside className="space-y-8">
  <div className="lg:sticky lg:top-8 space-y-8">

    {/* -------- Position Details Card -------- */}
    <div className="relative overflow-hidden rounded-3xl bg-white text-black  shadow-2xl border border-slate-800">
    {/* <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-2xl border border-slate-800"> */}

      {/* Glow Accent */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative p-6 sm:p-8">

        {/* Header */}
        <div className="mb-8">
          <h4 className="text-xl font-extrabold tracking-tight">
            Position Details
          </h4>
          <p className="text-black text-sm mt-1">
            Key information about this opportunity
          </p>
        </div>

        {/* Details List */}
        <div className="divide-y divide-slate-800 border-y border-slate-800">

          {/* Row */}
          <div className="flex items-center justify-between py-4">
            <span className=" text-black text-sm">
              Total Openings
            </span>
            <span className="font-bold text-black text-lg">
              {job.positions}
            </span>
          </div>

          {/* Row */}
          <div className="flex items-center justify-between py-4">
            <span className="text-black text-sm">
              Interview Rounds
            </span>
            <span className="font-semibold">
              {job.interview_rounds}
            </span>
          </div>

          {/* Row */}
          <div className="flex items-center justify-between py-4">
            <span className="text-black text-sm">
              Notice Period
            </span>
            <span className="font-semibold text-emerald-400">
              {job.joining_preference}
            </span>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-8 space-y-3">

          <a
            href={job.google_form_id}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block w-full text-center py-3.5
              bg-indigo-600 hover:bg-indigo-500
              text-white font-bold tracking-wide
              rounded-xl transition-all
              shadow-lg shadow-indigo-900/40
              hover:shadow-indigo-900/60
              active:scale-[0.98]
            "
          >
            Apply for this Role
          </a>

          <p className="text-xs text-slate-500 text-center">
            Application takes ~1-2 minutes
          </p>

        </div>
      </div>
    </div>

    {/* -------- Hiring Support Card -------- */}
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">

      {/* Icon */}
      <div className="w-12 h-12 bg-indigo-600/10 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
        <User size={22} />
      </div>

      {/* Content */}
      <h5 className="font-bold text-slate-900 text-lg mb-1">
        Hiring Support
      </h5>

      <p className="text-sm text-slate-600 leading-relaxed">
        Need clarification about the hiring process, interview stages,
        or role expectations? Our talent team is ready to assist you.
      </p>

      {/* Optional Contact CTA */}
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
