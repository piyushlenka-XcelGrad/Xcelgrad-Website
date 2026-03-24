// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowLeft, Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, 
//   Sparkles, GraduationCap, Mail
// } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import api from "../../api";
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const InputField = ({ 
//   label, type, id, placeholder, value, onChange, onBlur, 
//   required = true, showForgot = false, error, touched, isValid 
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const isPassword = type === 'password';
//   const inputType = isPassword && showPassword ? 'text' : type;

//   let stateClasses = "border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white";
//   if (touched && error) {
//     stateClasses = "border-red-300 focus:ring-4 focus:ring-red-500/10 focus:border-red-500 bg-red-50/30";
//   } else if (touched && isValid) {
//     stateClasses = "border-emerald-300 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-emerald-50/10";
//   }

//   return (
//     <div className="mb-5 relative">
//       <div className="flex items-center justify-between mb-2">
//         <label htmlFor={id} className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
//           {label}
//         </label>
//         {showForgot && (
//           <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
//             Forgot password?
//           </a>
//         )}
//       </div>
//       <div className="relative group">
//         <input
//           type={inputType}
//           id={id}
//           name={id}
//           className={`w-full px-4 py-3.5 rounded-2xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all duration-300 border ${stateClasses} ${isPassword ? 'pr-12' : 'pr-10'}`}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           onBlur={(e) => {
//             setIsFocused(false);
//             if (onBlur) onBlur(e);
//           }}
//           onFocus={() => setIsFocused(true)}
//           required={required}
//         />
        
//         <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-1">
//           {touched && error && !isFocused && !isPassword && (
//             <AlertCircle size={18} className="text-red-500 animate-in fade-in zoom-in" />
//           )}
//           {touched && isValid && !isFocused && !isPassword && (
//             <CheckCircle2 size={18} className="text-emerald-500 animate-in fade-in zoom-in" />
//           )}
          
//           {isPassword && (
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="text-slate-400 hover:text-slate-600 focus:outline-none p-1 transition-colors"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           )}
//         </div>
//       </div>
      
//       <div className={`mt-1.5 text-sm text-red-500 transition-all duration-300 overflow-hidden ${touched && error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
//         {error}
//       </div>
//     </div>
//   );
// };

// // --- VALIDATION HELPER ---
// const validateField = (name, value, formValues) => {
//   let error = '';
//   switch (name) {
//     case 'fullName':
//       if (!value.trim()) error = 'Full name is required';
//       else if (!/^[A-Za-z\s]+$/.test(value)) error = 'Name cannot contain numbers or special characters';
//       break;
//     case 'email':
//       if (!value.trim()) error = 'Email is required';
//       else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
//       break;
//     case 'password':
//       if (!value) error = 'Password is required';
//       else if (value.length < 6) error = 'Must be at least 6 characters long';
//       else if (!/(?=.*[a-z])/.test(value)) error = 'Must contain a lowercase letter';
//       else if (!/(?=.*[A-Z])/.test(value)) error = 'Must contain an uppercase letter';
//       else if (!/(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-])/.test(value)) error = 'Must contain a special character';
//       break;
//     case 'confirmPassword':
//       if (!value) error = 'Please confirm your password';
//       else if (value !== formValues.password) error = 'Passwords do not match';
//       break;
//     default:
//       break;
//   }
//   return error;
// };

// // --- SIGNUP FORM COMPONENT ---
// const SignupForm = ({ onSwitchToLogin, onSignupSuccess }) => {
//   const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const newErrors = {};
//     Object.keys(formData).forEach(key => {
//       const error = validateField(key, formData[key], formData);
//       if (error) newErrors[key] = error;
//     });
//     setErrors(newErrors);
//   }, [formData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//   };

//   const isFormValid = Object.keys(errors).length === 0 && Object.keys(formData).every(key => formData[key].trim() !== '');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
//     setTouched(allTouched);

//     if (!isFormValid) {
//       toast.error("Please fix the errors in the form");
//       return;
//     }

//     setLoading(true);
//     try {
//       await api.post('/website/auth/signup', {
//         full_name: formData.fullName,
//         email: formData.email,
//         password: formData.password,
//         confirm_password: formData.confirmPassword
//       });
//       toast.success("Account created! Check your email for the OTP.");
//       onSignupSuccess(formData.email); // Switches to OTP view with this email
//     } catch (err) {
//       toast.error(err.response?.data?.detail || 'An error occurred during signup.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
//           </span>
//           <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
//             Get Started
//           </span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
//           Create an <span className="text-indigo-600">account</span>
//         </h2>
//         <p className="text-slate-500 font-medium">Start your journey with XcelGrad today.</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-2">
//         <InputField label="FULL NAME" type="text" id="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} error={errors.fullName} touched={touched.fullName} isValid={!errors.fullName && formData.fullName} />
//         <InputField label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} isValid={!errors.email && formData.email} />
//         <InputField label="PASSWORD" type="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} touched={touched.password} isValid={!errors.password && formData.password} />
//         <InputField label="CONFIRM PASSWORD" type="password" id="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmPassword} touched={touched.confirmPassword} isValid={!errors.confirmPassword && formData.confirmPassword} />

//         <button type="submit" disabled={loading || (!isFormValid && Object.keys(touched).length > 0)} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
//           {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Creating account...</> : 'Create account'}
//         </button>
//       </form>

//       <p className="text-center text-sm text-slate-500 font-medium mt-8">
//         Already have an account?{' '}
//         <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Sign in</button>
//       </p>
//     </div>
//   );
// };

// // --- LOGIN FORM COMPONENT ---
// const LoginForm = ({ onSwitchToSignup, onNeedsVerification }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const newErrors = {};
//     if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
//     if (touched.password && !formData.password) {
//       newErrors.password = 'Password is required';
//     }
//     setErrors(newErrors);
//   }, [formData, touched]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched(prev => ({ ...prev, [name]: true }));
//   };

//   const isFormValid = formData.email && formData.password && Object.keys(errors).length === 0;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setTouched({ email: true, password: true });

//     if (!isFormValid) return;

//     setLoading(true);
//     try {
//       const response = await api.post('/website/auth/login', formData);
//       if (response?.data?.access_token){
//         localStorage.setItem('user_token', response.data.access_token);
//         api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        
//         login(response.data.access_token);
//         toast.success("Welcome back! Redirecting...");
//         navigate('/profile');
//       }
//     } catch (err) {
//       // ... existing error handling
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
//           <Sparkles size={14} className="text-indigo-500" />
//           <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Welcome Back</span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
//           Sign in to your <span className="text-indigo-600">account</span>
//         </h2>
//         <p className="text-slate-500 font-medium">Enter your credentials to access your portal</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <InputField label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} isValid={!errors.email && formData.email} />
//         <InputField label="PASSWORD" type="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} touched={touched.password} isValid={!!formData.password} showForgot={true} />

//         <button type="submit" disabled={loading || (!isFormValid && Object.keys(touched).length > 0)} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
//           {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Signing in...</> : 'Sign in'}
//         </button>
//       </form>

//       <p className="text-center text-sm text-slate-500 font-medium mt-8">
//         Don't have an account?{' '}
//         <button onClick={onSwitchToSignup} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Create account</button>
//       </p>
//     </div>
//   );
// };


// const OTPVerificationForm = ({ email, onSwitchToLogin }) => {
//   const [otp, setOtp] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [resendLoading, setResendLoading] = useState(false);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     if (otp.length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP.");
//       return;
//     }
    
//     setLoading(true);
//     try {
  
//       await api.post('/website/auth/verify-otp', { email, otp_code: otp });
      
      
//       toast.success("Verification successful! Please sign in.");
//       onSwitchToLogin(); 
      
//     } catch (err) {
//       toast.error(err.response?.data?.detail || "Invalid or expired OTP.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResend = async () => {
//     setResendLoading(true);
//     try {
//       await api.post('/website/auth/resend-otp', { email });
//       toast.success("A new OTP has been sent to your email.");
//     } catch (err) {
//       toast.error(err.response?.data?.detail || "Failed to resend OTP.");
//     } finally {
//       setResendLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
//       <div className="text-center mb-10">
//         <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
//           <Mail size={14} className="text-emerald-500" />
//           <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Verify Email</span>
//         </div>
//         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
//           Enter your <span className="text-indigo-600">code</span>
//         </h2>
//         <p className="text-slate-500 font-medium">
//           We've sent a 6-digit verification code to <br/>
//           <strong className="text-slate-800">{email}</strong>
//         </p>
//       </div>

//       <form onSubmit={handleVerify} className="space-y-6">
//         <div className="mb-5">
//           <label htmlFor="otp" className="block text-center text-[0.85rem] font-bold text-slate-700 tracking-widest mb-4">
//             6-DIGIT CODE
//           </label>
//           <input
//             type="text"
//             id="otp"
//             maxLength="6"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} // Only allow numbers
//             className="w-full px-4 py-5 rounded-2xl text-center text-4xl tracking-[0.5em] font-mono font-bold text-indigo-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50 focus:bg-white"
//             placeholder="••••••"
//             required
//           />
//         </div>

//         <button type="submit" disabled={loading || otp.length !== 6} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
//           {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Verifying...</> : 'Verify & Continue'}
//         </button>
//       </form>

//       <div className="mt-8 space-y-4 text-center">
//         <p className="text-sm text-slate-500 font-medium">
//           Didn't receive the code?{' '}
//           <button 
//             onClick={handleResend} 
//             disabled={resendLoading}
//             className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors disabled:opacity-50"
//           >
//             {resendLoading ? 'Sending...' : 'Resend OTP'}
//           </button>
//         </p>
//         <p className="text-sm text-slate-500 font-medium">
//           Wrong email?{' '}
//           <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">
//             Back to Sign in
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };


// // --- MAIN PAGE COMPONENT ---
// export default function App() {
//   // view can be 'login', 'signup', or 'otp'
//   const [currentView, setCurrentView] = useState('login');
//   const [verificationEmail, setVerificationEmail] = useState('');

//   const handleSignupSuccess = (email) => {
//     setVerificationEmail(email);
//     setCurrentView('otp');
//   };

//   const handleNeedsVerification = (email) => {
//     setVerificationEmail(email);
//     setCurrentView('otp');
//   };

//   return (
//     <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased flex items-center justify-center p-4 md:p-8 relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
//       {/* Global Background Blurs */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[120px]" />
//       </div>

//       <Toaster 
//         position="top-center" 
//         toastOptions={{ 
//           duration: 4000,
//           style: {
//             background: '#ffffff',
//             color: '#0f172a',
//             border: '1px solid #e2e8f0',
//             boxShadow: '0 20px 50px rgba(91,71,245,0.08)',
//             borderRadius: '16px',
//             fontWeight: '600',
//             padding: '16px 24px'
//           }
//         }} 
//       />

//       {/* Main Container */}
//       <div className="w-full max-w-[1200px] min-h-[700px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(91,71,245,0.08)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row relative z-10 transition-all duration-500">
        
//         {/* Left Section - Premium Brand Panel */}
//         <div className="lg:w-[45%] bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-8 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden">
          
//           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//             <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-white/10 blur-[100px]"></div>
//             <div className="absolute bottom-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[100px]"></div>
//           </div>

        

//           <div className="my-16 lg:my-0 flex justify-center items-center flex-col z-10 animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
//             <h1 className="text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
//               Scale your workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">confidence.</span>
//             </h1>
//             <p className="text-indigo-100 text-lg leading-relaxed font-medium mb-10 opacity-90">
//               Empowering learners with real-world skills, personalized mentorship, and job-ready programs. We bridge the gap between education and employment.
//             </p>
//           </div>
//         </div>

//         {/* Right Section - Form Container */}
//         <div className="lg:w-[55%] w-full bg-white p-6 md:p-12 lg:px-20 flex flex-col justify-center relative">
          
//           <div className="absolute top-8 left-6 md:left-12 lg:left-14">
//             <a href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-indigo-600 transition-colors group font-bold tracking-wide">
//               <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300" />
//               BACK TO HOME
//             </a>
//           </div>

//           {/* Dynamic Form Rendering based on currentView */}
//           <div className="mt-16 lg:mt-0 w-full flex justify-center">
//             {currentView === 'login' && (
//               <LoginForm 
//                 key="login" 
//                 onSwitchToSignup={() => setCurrentView('signup')} 
//                 onNeedsVerification={handleNeedsVerification}
//               />
//             )}
            
//             {currentView === 'signup' && (
//               <SignupForm 
//                 key="signup" 
//                 onSwitchToLogin={() => setCurrentView('login')} 
//                 onSignupSuccess={handleSignupSuccess}
//               />
//             )}

//             {currentView === 'otp' && (
//               <OTPVerificationForm 
//                 key="otp" 
//                 email={verificationEmail} 
//                 onSwitchToLogin={() => setCurrentView('login')} 
//               />
//             )}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, 
  Sparkles, GraduationCap, Mail, KeyRound, ShieldCheck
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import api from "../../api";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const InputField = ({ 
  label, type, id, placeholder, value, onChange, onBlur, 
  required = true, showForgot = false, onForgotClick, error, touched, isValid 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  let stateClasses = "border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white";
  if (touched && error) {
    stateClasses = "border-red-300 focus:ring-4 focus:ring-red-500/10 focus:border-red-500 bg-red-50/30";
  } else if (touched && isValid) {
    stateClasses = "border-emerald-300 focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 bg-emerald-50/10";
  }

  return (
    <div className="mb-5 relative">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="block text-[0.85rem] font-bold text-slate-700 tracking-wide">
          {label}
        </label>
        {showForgot && (
          <button 
            type="button" 
            onClick={onForgotClick}
            className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors focus:outline-none"
          >
            Forgot password?
          </button>
        )}
      </div>
      <div className="relative group">
        <input
          type={inputType}
          id={id}
          name={id}
          className={`w-full px-4 py-3.5 rounded-2xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all duration-300 border ${stateClasses} ${isPassword ? 'pr-12' : 'pr-10'}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          required={required}
        />
        
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center space-x-1">
          {touched && error && !isFocused && !isPassword && (
            <AlertCircle size={18} className="text-red-500 animate-in fade-in zoom-in" />
          )}
          {touched && isValid && !isFocused && !isPassword && (
            <CheckCircle2 size={18} className="text-emerald-500 animate-in fade-in zoom-in" />
          )}
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-slate-600 focus:outline-none p-1 transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>
      
      <div className={`mt-1.5 text-sm text-red-500 transition-all duration-300 overflow-hidden ${touched && error ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
        {error}
      </div>
    </div>
  );
};

// --- VALIDATION HELPER ---
const validateField = (name, value, formValues) => {
  let error = '';
  switch (name) {
    case 'fullName':
      if (!value.trim()) error = 'Full name is required';
      else if (!/^[A-Za-z\s]+$/.test(value)) error = 'Name cannot contain numbers or special characters';
      break;
    case 'email':
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
      break;
    case 'password':
    case 'newPassword':
      if (!value) error = 'Password is required';
      else if (value.length < 6) error = 'Must be at least 6 characters long';
      else if (!/(?=.*[a-z])/.test(value)) error = 'Must contain a lowercase letter';
      else if (!/(?=.*[A-Z])/.test(value)) error = 'Must contain an uppercase letter';
      else if (!/(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-])/.test(value)) error = 'Must contain a special character';
      break;
    case 'confirmPassword':
      if (!value) error = 'Please confirm your password';
      else if (value !== formValues.password) error = 'Passwords do not match';
      break;
    case 'confirmNewPassword':
      if (!value) error = 'Please confirm your new password';
      else if (value !== formValues.newPassword) error = 'Passwords do not match';
      break;
    default:
      break;
  }
  return error;
};

// --- SIGNUP FORM COMPONENT ---
const SignupForm = ({ onSwitchToLogin, onSignupSuccess }) => {
  const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key], formData);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const isFormValid = Object.keys(errors).length === 0 && Object.keys(formData).every(key => formData[key].trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (!isFormValid) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      await api.post('/website/auth/signup', {
        full_name: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword
      });
      toast.success("Account created! Check your email for the OTP.");
      onSignupSuccess(formData.email);
    } catch (err) {
      toast.error(err.response?.data?.detail || 'An error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
            Get Started
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Create an <span className="text-indigo-600">account</span>
        </h2>
        <p className="text-slate-500 font-medium">Start your journey with XcelGrad today.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <InputField label="FULL NAME" type="text" id="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} error={errors.fullName} touched={touched.fullName} isValid={!errors.fullName && formData.fullName} />
        <InputField label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} isValid={!errors.email && formData.email} />
        <InputField label="PASSWORD" type="password" id="password" placeholder="••••••••" value={formData.password} onChange={handleChange} onBlur={handleBlur} error={errors.password} touched={touched.password} isValid={!errors.password && formData.password} />
        <InputField label="CONFIRM PASSWORD" type="password" id="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmPassword} touched={touched.confirmPassword} isValid={!errors.confirmPassword && formData.confirmPassword} />

        <button type="submit" disabled={loading || (!isFormValid && Object.keys(touched).length > 0)} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
          {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Creating account...</> : 'Create account'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium mt-8">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Sign in</button>
      </p>
    </div>
  );
};

// --- LOGIN FORM COMPONENT ---
const LoginForm = ({ onSwitchToSignup, onSwitchToForgot, onNeedsVerification }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const newErrors = {};
    if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (touched.password && !formData.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const isFormValid = formData.email && formData.password && Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (!isFormValid) return;

    setLoading(true);
    try {
      const response = await api.post('/website/auth/login', formData);
      if (response?.data?.access_token){
        localStorage.setItem('user_token', response.data.access_token);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        
        login(response.data.access_token);
        toast.success("Welcome back! Redirecting...");
        navigate('/profile');
      }
    } catch (err) {
      if (err.response?.status === 403) {
        toast.error("Please verify your email first.");
        onNeedsVerification(formData.email);
      } else {
        toast.error(err.response?.data?.detail || 'Invalid credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
          <Sparkles size={14} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">Welcome Back</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Sign in to your <span className="text-indigo-600">account</span>
        </h2>
        <p className="text-slate-500 font-medium">Enter your credentials to access your portal</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} isValid={!errors.email && formData.email} />
        <InputField 
          label="PASSWORD" type="password" id="password" placeholder="••••••••" 
          value={formData.password} onChange={handleChange} onBlur={handleBlur} 
          error={errors.password} touched={touched.password} isValid={!!formData.password} 
          showForgot={true} onForgotClick={onSwitchToForgot} 
        />

        <button type="submit" disabled={loading || (!isFormValid && Object.keys(touched).length > 0)} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
          {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Signing in...</> : 'Sign in'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium mt-8">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Create account</button>
      </p>
    </div>
  );
};

// --- OTP VERIFICATION FORM ---
const OTPVerificationForm = ({ email, onSwitchToLogin }) => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }
    
    setLoading(true);
    try {
      await api.post('/website/auth/verify-otp', { email, otp_code: otp });
      toast.success("Verification successful! Please sign in.");
      onSwitchToLogin(); 
    } catch (err) {
      toast.error(err.response?.data?.detail || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try {
      await api.post('/website/auth/resend-otp', { email });
      toast.success("A new OTP has been sent to your email.");
    } catch (err) {
      toast.error(err.response?.data?.detail || "Failed to resend OTP.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
          <Mail size={14} className="text-emerald-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Verify Email</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Enter your <span className="text-indigo-600">code</span>
        </h2>
        <p className="text-slate-500 font-medium">
          We've sent a 6-digit verification code to <br/>
          <strong className="text-slate-800">{email}</strong>
        </p>
      </div>

      <form onSubmit={handleVerify} className="space-y-6">
        <div className="mb-5">
          <label htmlFor="otp" className="block text-center text-[0.85rem] font-bold text-slate-700 tracking-widest mb-4">
            6-DIGIT CODE
          </label>
          <input
            type="text"
            id="otp"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} // Only allow numbers
            className="w-full px-4 py-5 rounded-2xl text-center text-4xl tracking-[0.5em] font-mono font-bold text-indigo-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50 focus:bg-white"
            placeholder="••••••"
            required
          />
        </div>

        <button type="submit" disabled={loading || otp.length !== 6} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
          {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Verifying...</> : 'Verify & Continue'}
        </button>
      </form>

      <div className="mt-8 space-y-4 text-center">
        <p className="text-sm text-slate-500 font-medium">
          Didn't receive the code?{' '}
          <button 
            onClick={handleResend} 
            disabled={resendLoading}
            className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors disabled:opacity-50"
          >
            {resendLoading ? 'Sending...' : 'Resend OTP'}
          </button>
        </p>
        <p className="text-sm text-slate-500 font-medium">
          Wrong email?{' '}
          <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">
            Back to Sign in
          </button>
        </p>
      </div>
    </div>
  );
};


// --- FORGOT PASSWORD FORM ---
const ForgotPasswordForm = ({ onSwitchToLogin, onForgotSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (val) => {
    if (!val.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Please enter a valid email address';
    return '';
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (touched) setError(validate(e.target.value));
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validate(email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    const validationError = validate(email);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await api.post('/website/auth/forgot-password', { email });
      toast.success("If an account exists, a reset code has been sent.");
      onForgotSuccess(email);
    } catch (err) {
      // Due to enumeration protection, this might rarely hit, but just in case
      toast.error(err.response?.data?.detail || "Failed to process request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
          <KeyRound size={14} className="text-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-600">Recovery</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Reset <span className="text-indigo-600">password</span>
        </h2>
        <p className="text-slate-500 font-medium">
          Enter the email associated with your account and we'll send you a secure reset code.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField 
          label="ACCOUNT EMAIL" type="email" id="reset-email" placeholder="name@company.com" 
          value={email} onChange={handleChange} onBlur={handleBlur} 
          error={error} touched={touched} isValid={!error && email} 
        />

        <button type="submit" disabled={loading || (touched && !!error)} className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
          {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Sending Code...</> : 'Send Reset Code'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium mt-8">
        Remember your password?{' '}
        <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Sign in</button>
      </p>
    </div>
  );
};


// --- RESET PASSWORD FORM ---
const ResetPasswordForm = ({ email, onSwitchToLogin }) => {
  const initialState = { otp: '', newPassword: '', confirmNewPassword: '' };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key === 'otp') {
        if (touched.otp && formData.otp.length !== 6) newErrors.otp = 'OTP must be exactly 6 digits';
      } else {
        const error = validateField(key, formData[key], formData);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Force numbers only for OTP
    const finalValue = name === 'otp' ? value.replace(/\D/g, '') : value;
    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const isFormValid = Object.keys(errors).length === 0 && Object.keys(formData).every(key => formData[key].trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (!isFormValid) return;

    setLoading(true);
    try {
      await api.post('/website/auth/reset-password', {
        email: email,
        otp_code: formData.otp,
        new_password: formData.newPassword,
        confirm_new_password: formData.confirmNewPassword
      });
      toast.success("Password successfully reset! Please sign in.");
      onSwitchToLogin();
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Failed to reset password. The code may be expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-600">Secure Reset</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Create new <span className="text-indigo-600">password</span>
        </h2>
        <p className="text-slate-500 font-medium text-sm">
          Enter the 6-digit code sent to <strong className="text-slate-800">{email}</strong> and choose your new password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="mb-5">
          <label htmlFor="otp" className="block text-[0.85rem] font-bold text-slate-700 tracking-wide mb-2">
            6-DIGIT RECOVERY CODE
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            maxLength="6"
            value={formData.otp}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-4 rounded-2xl text-center text-2xl tracking-[0.5em] font-mono font-bold focus:outline-none transition-all duration-300 border ${touched.otp && errors.otp ? 'border-red-300 focus:ring-red-500/10 bg-red-50/30 text-red-900' : 'border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white text-indigo-900'}`}
            placeholder="••••••"
            required
          />
        </div>

        <InputField label="NEW PASSWORD" type="password" id="newPassword" placeholder="••••••••" value={formData.newPassword} onChange={handleChange} onBlur={handleBlur} error={errors.newPassword} touched={touched.newPassword} isValid={!errors.newPassword && formData.newPassword} />
        <InputField label="CONFIRM NEW PASSWORD" type="password" id="confirmNewPassword" placeholder="••••••••" value={formData.confirmNewPassword} onChange={handleChange} onBlur={handleBlur} error={errors.confirmNewPassword} touched={touched.confirmNewPassword} isValid={!errors.confirmNewPassword && formData.confirmNewPassword} />

        <button type="submit" disabled={loading || (!isFormValid && Object.keys(touched).length > 0)} className="w-full mt-6 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1">
          {loading ? <><Loader2 className="animate-spin mr-2" size={20} /> Updating Password...</> : 'Update Password'}
        </button>
      </form>
      
      <p className="text-center text-sm text-slate-500 font-medium mt-6">
        <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">Back to Sign in</button>
      </p>
    </div>
  );
};


// --- MAIN PAGE COMPONENT ---
export default function App() {
  // view can be 'login', 'signup', 'otp', 'forgotPassword', or 'resetPassword'
  const [currentView, setCurrentView] = useState('login');
  const [verificationEmail, setVerificationEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');

  const handleSignupSuccess = (email) => {
    setVerificationEmail(email);
    setCurrentView('otp');
  };

  const handleNeedsVerification = (email) => {
    setVerificationEmail(email);
    setCurrentView('otp');
  };

  const handleForgotSuccess = (email) => {
    setResetEmail(email);
    setCurrentView('resetPassword');
  };

  return (
    <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased flex items-center justify-center p-4 md:p-8 relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Global Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[120px]" />
      </div>

      <Toaster 
        position="top-center" 
        toastOptions={{ 
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 50px rgba(91,71,245,0.08)',
            borderRadius: '16px',
            fontWeight: '600',
            padding: '16px 24px'
          }
        }} 
      />

      {/* Main Container */}
      <div className="w-full max-w-[1200px] min-h-[700px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(91,71,245,0.08)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row relative z-10 transition-all duration-500">
        
        {/* Left Section - Premium Brand Panel */}
        <div className="lg:w-[45%] bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-8 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-white/10 blur-[100px]"></div>
            <div className="absolute bottom-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[100px]"></div>
          </div>

        

          <div className="my-16 lg:my-0 flex justify-center items-center flex-col z-10 animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
            <h1 className="text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
              Scale your workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">confidence.</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed font-medium mb-10 opacity-90">
              Empowering learners with real-world skills, personalized mentorship, and job-ready programs. We bridge the gap between education and employment.
            </p>
          </div>
        </div>

        {/* Right Section - Form Container */}
        <div className="lg:w-[55%] w-full bg-white p-6 md:p-12 lg:px-20 flex flex-col justify-center relative">
          
          <div className="absolute top-8 left-6 md:left-12 lg:left-14">
            <a href="/" className="inline-flex items-center text-sm text-slate-400 hover:text-indigo-600 transition-colors group font-bold tracking-wide">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300" />
              BACK TO HOME
            </a>
          </div>

          {/* Dynamic Form Rendering based on currentView */}
          <div className="mt-16 lg:mt-0 w-full flex justify-center">
            {currentView === 'login' && (
              <LoginForm 
                key="login" 
                onSwitchToSignup={() => setCurrentView('signup')} 
                onSwitchToForgot={() => setCurrentView('forgotPassword')}
                onNeedsVerification={handleNeedsVerification}
              />
            )}
            
            {currentView === 'signup' && (
              <SignupForm 
                key="signup" 
                onSwitchToLogin={() => setCurrentView('login')} 
                onSignupSuccess={handleSignupSuccess}
              />
            )}

            {currentView === 'otp' && (
              <OTPVerificationForm 
                key="otp" 
                email={verificationEmail} 
                onSwitchToLogin={() => setCurrentView('login')} 
              />
            )}

            {currentView === 'forgotPassword' && (
              <ForgotPasswordForm 
                key="forgotPassword" 
                onSwitchToLogin={() => setCurrentView('login')} 
                onForgotSuccess={handleForgotSuccess}
              />
            )}

            {currentView === 'resetPassword' && (
              <ResetPasswordForm 
                key="resetPassword" 
                email={resetEmail} 
                onSwitchToLogin={() => setCurrentView('login')} 
              />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}