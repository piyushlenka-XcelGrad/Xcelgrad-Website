

// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, X, Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';

// import api from "../../api";


// // --- REUSABLE INPUT COMPONENT ---
// const InputField = ({ 
//   label, type, id, placeholder, value, onChange, onBlur, 
//   required = true, showForgot = false, error, touched, isValid 
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);
//   const isPassword = type === 'password';
//   const inputType = isPassword && showPassword ? 'text' : type;

//   // Determine border and ring colors based on state
//   let stateClasses = "border-gray-200 focus:ring-indigo-500 focus:border-indigo-500";
//   if (touched && error) {
//     stateClasses = "border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50/30";
//   } else if (touched && isValid) {
//     stateClasses = "border-emerald-300 focus:ring-emerald-500 focus:border-emerald-500 bg-emerald-50/10";
//   }

//   return (
//     <div className="mb-5  relative">
//       <div className="flex items-center justify-between mb-1.5">
//         <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
//           {label}
//         </label>
//         {showForgot && (
//           <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
//             Forgot password?
//           </a>
//         )}
//       </div>
//       <div className="relative group">
//         <input
//           type={inputType}
//           id={id}
//           name={id}
//           className={`w-full px-4 py-3 rounded-xl bg-gray-50/50 border placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 ${stateClasses} ${isPassword ? 'pr-12' : 'pr-10'}`}
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
        
//         {/* Right side icons (Validation or Password Toggle) */}
//         <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">
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
//               className="text-gray-400 hover:text-gray-600 focus:outline-none p-1 transition-colors"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           )}
//         </div>
//       </div>
      
//       {/* Error Message */}
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
// const SignupForm = ({ onSwitchToLogin }) => {
//   const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };
//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);

//   // Validate whenever formData changes
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
    
//     // Mark all as touched on submit
//     const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
//     setTouched(allTouched);

//     if (!isFormValid) {
//       toast.error("Please fix the errors in the form");
//       return;
//     }

//     setLoading(true);
//     try {
//      const r = await api.post('/website/auth/signup', {
//         full_name: formData.fullName,
//         email: formData.email,
//         password: formData.password,
//          confirm_password : formData.confirmPassword
//       });

//       // console.log(r);
      
      
//       toast.success("Account created successfully!");
//       setFormData(initialState);
//       setTouched({});
//       onSwitchToLogin(); 
      
//     } catch (err) {
//       // console.log(err.response);
//   //  console.log(err.response.data);
      
//       toast.error(err.response?.data?.message || 'An error occurred during signup.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full mt-10 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Create an account</h2>
//         <p className="text-gray-500">Start your journey with XcelGrad today</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <InputField 
//           label="Full Name" type="text" id="fullName" placeholder="John Doe" 
//           value={formData.fullName} onChange={handleChange} onBlur={handleBlur}
//           error={errors.fullName} touched={touched.fullName} isValid={!errors.fullName && formData.fullName}
//         />
//         <InputField 
//           label="Email address" type="email" id="email" placeholder="name@company.com" 
//           value={formData.email} onChange={handleChange} onBlur={handleBlur}
//           error={errors.email} touched={touched.email} isValid={!errors.email && formData.email}
//         />
//         <InputField 
//           label="Password" type="password" id="password" placeholder="••••••••" 
//           value={formData.password} onChange={handleChange} onBlur={handleBlur}
//           error={errors.password} touched={touched.password} isValid={!errors.password && formData.password}
//         />
//         <InputField 
//           label="Confirm Password" type="password" id="confirmPassword" placeholder="••••••••" 
//           value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur}
//           error={errors.confirmPassword} touched={touched.confirmPassword} isValid={!errors.confirmPassword && formData.confirmPassword}
//         />

//         <button
//           type="submit"
//           disabled={loading || (!isFormValid && Object.keys(touched).length > 0)}
//           className="w-full mt-8 flex items-center justify-center py-3.5 px-4 rounded-xl text-white font-semibold bg-gray-900 hover:bg-gray-800 shadow-lg shadow-gray-900/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
//         >
//           {loading ? (
//             <><Loader2 className="animate-spin mr-2" size={20} /> Creating account...</>
//           ) : 'Create account'}
//         </button>
//       </form>

//       <p className="text-center text-sm text-gray-600 mt-8">
//         Already have an account?{' '}
//         <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold focus:outline-none transition-colors">
//           Sign in
//         </button>
//       </p>
//     </div>
//   );
// };

// // --- LOGIN FORM COMPONENT ---
// const LoginForm = ({ onSwitchToSignup }) => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
//   const [loading, setLoading] = useState(false);

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
//       toast.success("Welcome back!");
//       // localStorage.setItem('token', response.data.access_token);
//       // window.location.href = '/dashboard'; 
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Invalid email or password.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Welcome back</h2>
//         <p className="text-gray-500">Enter your credentials to access your account</p>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <InputField 
//           label="Email address" type="email" id="email" placeholder="name@company.com" 
//           value={formData.email} onChange={handleChange} onBlur={handleBlur}
//           error={errors.email} touched={touched.email} isValid={!errors.email && formData.email}
//         />
//         <InputField 
//           label="Password" type="password" id="password" placeholder="••••••••" 
//           value={formData.password} onChange={handleChange} onBlur={handleBlur}
//           error={errors.password} touched={touched.password} isValid={!!formData.password}
//           showForgot={true} 
//         />

//         <button
//           type="submit"
//           disabled={loading || (!isFormValid && Object.keys(touched).length > 0)}
//           className="w-full mt-8 flex items-center justify-center py-3.5 px-4 rounded-xl text-white font-semibold bg-gray-900 hover:bg-gray-800 shadow-lg shadow-gray-900/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
//         >
//           {loading ? (
//             <><Loader2 className="animate-spin mr-2" size={20} /> Signing in...</>
//           ) : 'Sign in'}
//         </button>
//       </form>

//       <p className="text-center text-sm text-gray-600 mt-8">
//         Don't have an account?{' '}
//         <button onClick={onSwitchToSignup} className="text-indigo-600 hover:text-indigo-700 hover:underline font-semibold focus:outline-none transition-colors">
//           Create account
//         </button>
//       </p>
//     </div>
//   );
// };

// // --- MAIN PAGE COMPONENT ---
// export default function App() {
//   const [isLoginView, setIsLoginView] = useState(false);

//   return (
//     <div className="min-h-screen mt-20 flex flex-col lg:flex-row bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
//       <Toaster 
//         position="top-center" 
//         toastOptions={{ 
//           duration: 4000,
//           style: {
//             background: '#333',
//             color: '#fff',
//             borderRadius: '10px',
//             fontWeight: '500'
//           }
//         }} 
//       />

//       {/* Left Section - Premium Brand Panel */}
//       <div className="lg:w-[45%] bg-[#0a0a0a] p-8 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-screen">
//         {/* Abstract Background Gradients */}
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//           <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
//           <div className="absolute bottom-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[100px]"></div>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center space-x-3 relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
//           <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-2xl">
//             <X size={24} className="text-white" strokeWidth={2.5} />
//           </div>
//           <span className="text-2xl font-bold tracking-tight text-white/90">XcelGrad</span>
//         </div>

//         {/* Main Text Content */}
//         <div className="my-16 lg:my-0 relative z-10 max-w-lg animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
//           <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//             <span className="text-sm font-medium text-gray-300">Empowering careers</span>
//           </div>
//           <h1 className="text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400">
//             Accelerate your career journey.
//           </h1>
//           <p className="text-gray-400 text-lg leading-relaxed font-light">
//             Join a community of ambitious professionals and top-tier companies. Your next big opportunity is just a login away.
//           </p>
          
//           {/* Trust indicators */}
         
//         </div>

//         {/* Footer */}
//         <div className="text-sm text-gray-500 relative z-10 font-medium flex justify-between items-center">
//           <span>© 2024 XcelGrad Inc.</span>
//         </div>
//       </div>

//       {/* Right Section - Form Container */}
//       <div className="lg:w-[55%] w-full bg-white p-6 md:p-12 lg:px-24 flex flex-col justify-center relative min-h-screen lg:min-h-0">
//         {/* "Back to Home" Link */}
//         <div className="absolute top-8 left-6 md:left-12 lg:left-16">
//           <a href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors group font-semibold">
//             <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300" />
//             Back to Home
//           </a>
//         </div>

//         {/* Form View Toggle with subtle animation */}
//         <div className="mt-16 lg:mt-0 w-full flex justify-center">
//           {isLoginView ? (
//             <LoginForm key="login" onSwitchToSignup={() => setIsLoginView(false)} />
//           ) : (
//             <SignupForm key="signup" onSwitchToLogin={() => setIsLoginView(true)} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft,  Eye, EyeOff, Loader2, AlertCircle, CheckCircle2, 
  Sparkles, GraduationCap
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import api from "../../api";
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
// --- MOCK API FOR PREVIEW PURPOSES ---


// --- REUSABLE INPUT COMPONENT ---
const InputField = ({ 
  label, type, id, placeholder, value, onChange, onBlur, 
  required = true, showForgot = false, error, touched, isValid 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  // Determine border and ring colors based on state matching the reference theme
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
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
            Forgot password?
          </a>
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
        
        {/* Right side icons */}
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
      
      {/* Error Message */}
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
    default:
      break;
  }
  return error;
};

// --- SIGNUP FORM COMPONENT ---
const SignupForm = ({ onSwitchToLogin }) => {
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
      toast.success("Account created successfully!");
      setFormData(initialState);
      setTouched({});
      onSwitchToLogin(); 
    } catch (err) {
      toast.error(err.response?.data?.message || 'An error occurred during signup.');
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
        {/* <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Create an account
        </h2> */}
         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Create an <span className="text-indigo-600">account</span>
          </h2>
        <p className="text-slate-500 font-medium">Start your journey with XcelGrad today.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2">
        <InputField 
          label="FULL NAME" type="text" id="fullName" placeholder="John Doe" 
          value={formData.fullName} onChange={handleChange} onBlur={handleBlur}
          error={errors.fullName} touched={touched.fullName} isValid={!errors.fullName && formData.fullName}
        />
        <InputField 
          label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" 
          value={formData.email} onChange={handleChange} onBlur={handleBlur}
          error={errors.email} touched={touched.email} isValid={!errors.email && formData.email}
        />
        <InputField 
          label="PASSWORD" type="password" id="password" placeholder="••••••••" 
          value={formData.password} onChange={handleChange} onBlur={handleBlur}
          error={errors.password} touched={touched.password} isValid={!errors.password && formData.password}
        />
        <InputField 
          label="CONFIRM PASSWORD" type="password" id="confirmPassword" placeholder="••••••••" 
          value={formData.confirmPassword} onChange={handleChange} onBlur={handleBlur}
          error={errors.confirmPassword} touched={touched.confirmPassword} isValid={!errors.confirmPassword && formData.confirmPassword}
        />

        <button
          type="submit"
          disabled={loading || (!isFormValid && Object.keys(touched).length > 0)}
          className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1"
        >
          {loading ? (
            <><Loader2 className="animate-spin mr-2" size={20} /> Creating account...</>
          ) : 'Create account'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium mt-8">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">
          Sign in
        </button>
      </p>
    </div>
  );
};

// --- LOGIN FORM COMPONENT ---
const LoginForm = ({ onSwitchToSignup }) => {
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
     const response  = await api.post('/website/auth/login', formData);
     if (response?.data?.access_token){
      localStorage.setItem('user_token', response?.data?.access_token);
      login(response?.data?.access_token);
      toast.success("Welcome back! Redirecting...");
      navigate('/profile');
     } else {
      toast.error("Login failed. Please check your credentials.");
    }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
      <div className="text-center mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
          <Sparkles size={14} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
            Welcome Back
          </span>
        </div>
       
         <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
             Sign in to your<span className="text-indigo-600">account</span>
          </h2>
        <p className="text-slate-500 font-medium">Enter your credentials to access your portal</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField 
          label="EMAIL ADDRESS" type="email" id="email" placeholder="name@company.com" 
          value={formData.email} onChange={handleChange} onBlur={handleBlur}
          error={errors.email} touched={touched.email} isValid={!errors.email && formData.email}
        />
        <InputField 
          label="PASSWORD" type="password" id="password" placeholder="••••••••" 
          value={formData.password} onChange={handleChange} onBlur={handleBlur}
          error={errors.password} touched={touched.password} isValid={!!formData.password}
          showForgot={true} 
        />

        <button
          type="submit"
          disabled={loading || (!isFormValid && Object.keys(touched).length > 0)}
          className="w-full mt-8 flex items-center justify-center py-4 px-4 rounded-2xl text-white font-bold bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1"
        >
          {loading ? (
            <><Loader2 className="animate-spin mr-2" size={20} /> Signing in...</>
          ) : 'Sign in'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 font-medium mt-8">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="text-indigo-600 hover:text-indigo-800 font-bold focus:outline-none transition-colors">
          Create account
        </button>
      </p>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function App() {
  const [isLoginView, setIsLoginView] = useState(false);

  return (
    <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased flex items-center justify-center p-4 md:p-8 relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Global Background Blurs matched to Reference Components */}
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

      {/* Main Container - Floating Glassmorphic Card */}
      <div className="w-full max-w-[1200px] min-h-[700px] bg-white rounded-[40px] shadow-[0_20px_50px_rgba(91,71,245,0.08)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row relative z-10 transition-all duration-500">
        
        {/* Left Section - Premium Brand Panel */}
        <div className="lg:w-[45%] bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-8 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden">
          
          {/* Internal Decorative Blurs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-white/10 blur-[100px]"></div>
            <div className="absolute bottom-[10%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[100px]"></div>
          </div>

          {/* Logo / Header */}
          <div className="flex items-center mb-6 space-x-3 relative z-10 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/20 shadow-xl">
              <GraduationCap size={28} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white">XcelGrad</span>
          </div>

          {/* Main Text Content */}
          <div className="my-16 lg:my-0  flex justify-center items-center flex-col z-10 animate-in fade-in slide-in-from-left-8 duration-1000 delay-150 fill-mode-both">
            <h1 className="text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] mb-6 text-white tracking-tight">
              Scale your workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">confidence.</span>
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed font-medium mb-10 opacity-90">
              Empowering learners with real-world skills, personalized mentorship, and job-ready programs. We bridge the gap between education and employment.
            </p>
            
            {/* Features Checkmarks */}
            {/* <div className="space-y-4">
              {[
                'Digital transformation & innovation',
                'Personalized industry mentorship',
                'Scalable tech-driven commerce'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-white/90">
                  <div className="bg-white/10 p-1 rounded-full border border-white/20">
                    <Check size={14} strokeWidth={3} className="text-blue-200" />
                  </div>
                  <span className="font-semibold text-[0.95rem]">{feature}</span>
                </div>
              ))}
            </div> */}
          </div>

          {/* Glassmorphic Testimonial/Vision Card */}
          {/* <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both hidden md:block">
            <div className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-[24px] border border-white/20">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/50 flex items-center justify-center border border-indigo-400/50">
                    <Briefcase size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">Deepak Verma</p>
                    <p className="text-xs text-indigo-200 font-medium">Founder, XcelGrad</p>
                  </div>
               </div>
              <p className="text-indigo-50 text-sm italic font-medium leading-relaxed">
                "Driven by the mission to bridge the gap between complex technology and real-world business impact."
              </p>
            </div>
          </div> */}
        </div>

        {/* Right Section - Form Container */}
        <div className="lg:w-[55%] w-full bg-white p-6 md:p-12 lg:px-20 flex flex-col justify-center relative">
          
          {/* Back Button */}
          <div className="absolute top-8 left-6 md:left-12 lg:left-14">
            <a href="#" className="inline-flex items-center text-sm text-slate-400 hover:text-indigo-600 transition-colors group font-bold tracking-wide">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300" />
              BACK TO HOME
            </a>
          </div>

          {/* Dynamic Form Rendering */}
          <div className="mt-16 lg:mt-0 w-full flex justify-center">
            {isLoginView ? (
              <LoginForm key="login" onSwitchToSignup={() => setIsLoginView(false)} />
            ) : (
              <SignupForm key="signup" onSwitchToLogin={() => setIsLoginView(true)} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}