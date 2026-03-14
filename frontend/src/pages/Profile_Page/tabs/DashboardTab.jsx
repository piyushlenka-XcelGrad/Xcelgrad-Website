import React from 'react';
import { Briefcase, Clock, CheckCircle2, Loader2, Building2, ArrowRight, XCircle, Calendar } from 'lucide-react';

export default function DashboardTab({ appliedJobs, loadingJobs }) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-slate-900">Application Dashboard</h2>
        <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full border border-indigo-100">
          Overview
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Briefcase size={24} /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-0.5">Total Applied</p>
            <p className="text-2xl font-black text-slate-900">{appliedJobs.length}</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-amber-50 p-3 rounded-xl text-amber-500"><Clock size={24} /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-0.5">In Review</p>
            <p className="text-2xl font-black text-slate-900">
              {appliedJobs.filter(job => ['Applied', 'Reviewing'].includes(job.status)).length}
            </p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600"><CheckCircle2 size={24} /></div>
          <div>
            <p className="text-slate-500 text-xs font-bold tracking-wider uppercase mb-0.5">Offers</p>
            <p className="text-2xl font-black text-slate-900">
              {appliedJobs.filter(job => ['Interview', 'Offer', 'Hired'].includes(job.status)).length}
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-900 mb-5 uppercase tracking-wider text-xs">Recent Applications</h3>
      
      {loadingJobs ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-indigo-600" size={32} />
        </div>
      ) : appliedJobs.length === 0 ? (
        <div className="text-center p-12 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
            <Building2 size={24} className="text-slate-400" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg mb-2">No applications yet</h4>
          <p className="text-slate-500 font-medium">Start exploring jobs and your applications will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {appliedJobs.map((app) => {
            let statusConfig = { color: 'text-slate-600', bg: 'bg-slate-100', icon: Clock };
            if (app.status === 'Applied') statusConfig = { color: 'text-blue-700', bg: 'bg-blue-50', icon: CheckCircle2 };
            if (app.status === 'Reviewing') statusConfig = { color: 'text-amber-700', bg: 'bg-amber-50', icon: Clock };
            if (app.status === 'Interview') statusConfig = { color: 'text-indigo-700', bg: 'bg-indigo-50', icon: ArrowRight };
            if (app.status === 'Offer' || app.status === 'Hired') statusConfig = { color: 'text-emerald-700', bg: 'bg-emerald-50', icon: CheckCircle2 };
            if (app.status === 'Rejected') statusConfig = { color: 'text-rose-700', bg: 'bg-rose-50', icon: XCircle };

            const StatusIcon = statusConfig.icon;

            return (
              <div key={app.id} className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl border border-slate-100 flex items-center justify-center bg-slate-50 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Building2 size={24} className="text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg group-hover:text-indigo-700 transition-colors">{app.job_title}</h4>
                    <p className="text-slate-500 font-medium mt-0.5">{app.company_name} • {app.location}</p>
                    <p className="text-slate-400 text-xs font-semibold mt-2 flex items-center gap-1.5">
                      <Calendar size={12} /> Applied on {new Date(app.applied_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center justify-between md:flex-col md:items-end gap-3">
                  <div className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold ${statusConfig.bg} ${statusConfig.color}`}>
                    <StatusIcon size={16} />
                    {app.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}