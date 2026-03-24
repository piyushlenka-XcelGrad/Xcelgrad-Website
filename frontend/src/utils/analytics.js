import ReactGA from "react-ga4";

// Replace this with your actual Measurement ID!
const MEASUREMENT_ID = "G-L3DJ7XFEB2"; 

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Call this when a user successfully logs in
export const trackLogin = (userId, method = "email") => {
  ReactGA.set({ user_id: userId }); // Links their activity to their account
  ReactGA.event("login", { method: method });
};

// Call this when a user creates an account
export const trackSignup = (userId, method = "email") => {
  ReactGA.set({ user_id: userId });
  ReactGA.event("sign_up", { method: method });
};

// Call this for any button clicks you want to track (e.g., "Apply Job", "Download Resume")
export const trackCustomEvent = (category, action, label = "") => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};