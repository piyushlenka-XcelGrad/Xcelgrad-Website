import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Service</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Please read these terms carefully before using the XcelGrad platform.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
            {/* 1. Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">1</span>
                Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing and using the XcelGrad website, learning management system (LMS), and related services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            {/* 2. User Accounts & Registration */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">2</span>
                User Accounts & Registration
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">To access certain features of the platform, including job applications and learning modules, you must register for an account. You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain the security and confidentiality of your login credentials.</li>
                <li>Take full responsibility for all activities that occur under your account.</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>

            {/* 3. Platform Services */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">3</span>
                Platform Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                XcelGrad provides B2B sales skilling, structured learning modules, internships, and job placement facilitation. While we strive to connect candidates with opportunities, enrollment in our programs does not guarantee employment or specific career outcomes unless explicitly stated in a separate agreement.
              </p>
            </section>

            {/* 4. Acceptable Use Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">4</span>
                Acceptable Use Policy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">You agree not to use the XcelGrad platform to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Submit false, inaccurate, or misleading information on your profile or applications.</li>
                <li>Distribute viruses, malware, or any other harmful code.</li>
                <li>Attempt to reverse-engineer, scrape, or extract data from our learning modules or job boards.</li>
                <li>Share or distribute paid course materials with unauthorized third parties.</li>
              </ul>
            </section>

            {/* 5. Intellectual Property Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">5</span>
                Intellectual Property Rights
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content on this website—including text, graphics, logos, learning modules, video content, and software—is the property of XcelGrad or its content suppliers and is protected by intellectual property laws. You are granted a limited, non-exclusive license to access the materials for personal, non-commercial educational purposes only.
              </p>
            </section>

            {/* 6. Limitation of Liability */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">6</span>
                Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                XcelGrad and its partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform, unauthorized access to your data, or the conduct of any third party on the platform.
              </p>
            </section>

            {/* 7. Modifications to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">7</span>
                Modifications to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. Significant changes will be communicated via email or an announcement on our platform. Your continued use of the platform following the posting of any changes constitutes acceptance of those changes.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">8</span>
                Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions or concerns regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 inline-block">
                <div className="flex flex-col gap-2">
                  <a href="mailto:elearning@xcelgrad.org" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    elearning@xcelgrad.org
                  </a>
                  <a href="tel:9311039699" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    +91 9311039699
                  </a>
                </div>
              </div>
            </section>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TermsOfService;