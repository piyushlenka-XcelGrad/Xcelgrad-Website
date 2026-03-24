import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Policy</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
            {/* 1. Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">1</span>
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                XcelGrad is committed to safeguarding your privacy and ensuring transparency in how we collect, use, and protect your personal data. This policy is designed in accordance with guidelines from the Skill India Digital Hub (SIDH) and the National Skill Development Corporation (NSDC). By accessing our website or engaging with our services, you consent to the practices described in this policy.
              </p>
            </section>

            {/* 2. Scope of Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">2</span>
                Scope of Policy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">This policy applies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Visitors to our website</li>
                <li>Candidates enrolled in training or placement programs</li>
                <li>Academic and corporate partners</li>
                <li>Trainers and institutional collaborators</li>
              </ul>
            </section>

            {/* 3. Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">3</span>
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">We may collect the following types of data:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong className="text-slate-800">Personal Information:</strong> Name, contact details, educational background, employment history, Aadhaar number (if required), gender, date of birth, and other identifiers.</li>
                <li><strong className="text-slate-800">Usage Data:</strong> IP address, browser type, device information, pages visited, time spent, and referral sources.</li>
                <li><strong className="text-slate-800">Training & Placement Data:</strong> Skill assessments, certifications, interview feedback, and placement outcomes.</li>
              </ul>
            </section>

            {/* 4. Purpose of Data Collection */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">4</span>
                Purpose of Data Collection
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Deliver personalized training and placement services</li>
                <li>Facilitate Skill India-aligned skilling programs</li>
                <li>Share relevant updates and career opportunities</li>
                <li>Improve platform performance and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            {/* 5. Data Sharing & Disclosure */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">5</span>
                Data Sharing & Disclosure
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Skill India and NSDC for program reporting and compliance</li>
                <li>Academic and corporate partners for training and placement coordination</li>
                <li>Technology providers for hosting, analytics, and communication</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            {/* 6. Data Storage & Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">6</span>
                Data Storage & Security
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">We implement industry-standard security protocols including:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Encrypted data transmission</li>
                <li>Secure servers and access controls</li>
                <li>Regular audits and compliance checks</li>
              </ul>
            </section>

            {/* 7. User Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">7</span>
                User Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Access and update your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
              </ul>
            </section>

            {/* 8. Third-Party Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">8</span>
                Third-Party Links
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to external platforms. XcelGrad is not responsible for their privacy practices.
              </p>
            </section>

            {/* 9. Policy Updates */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">9</span>
                Policy Updates
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may revise this policy periodically. Updates will be posted on this page with the revised effective date.
              </p>
            </section>

            {/* 10. Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-black">10</span>
                Contact Us
              </h2>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-4 inline-block">
                <p className="text-slate-600 leading-relaxed mb-4">
                  For questions or data-related requests, please contact:
                </p>
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

export default PrivacyPolicy;