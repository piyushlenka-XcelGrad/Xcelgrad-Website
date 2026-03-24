import React from 'react';
import { 
  Award, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Layers 
} from 'lucide-react';


export const values = [
  {
    id: "01",
    title: "Respect for the Sales Profession",
    description: "We believe B2B sales is a serious profession that deserves structure, discipline, and long-term respect. We are committed to elevating how sales is practiced and how it is perceived — especially among talented professionals entering the field.",
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    bgClass: "bg-indigo-50",
    borderHover: "hover:border-indigo-200"
  },
  {
    id: "02",
    title: "Aligned Value Creation",
    description: "We pursue engagements where value is real, measurable, and shared. When businesses improve performance, when professionals grow, and when early-career talent builds capability — XcelGrad succeeds. We do not separate revenue from delivered impact.",
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    bgClass: "bg-blue-50",
    borderHover: "hover:border-blue-200"
  },
  {
    id: "03",
    title: "Integrity & Honest Diagnosis",
    description: "We believe in transparent communication and honest assessment — even when it is uncomfortable. We commit to clarity over convenience and long-term outcomes over short-term optics.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    bgClass: "bg-emerald-50",
    borderHover: "hover:border-emerald-200"
  },
  {
    id: "04",
    title: "Discipline & Hard Work",
    description: "There is no substitute for structured effort. We value preparation, execution discipline, and consistency over shortcuts or hype.",
    icon: <Activity className="w-8 h-8 text-purple-600" />,
    bgClass: "bg-purple-50",
    borderHover: "hover:border-purple-200"
  },
  {
    id: "05",
    title: "Depth Over Superficiality",
    description: "We do not operate at surface level. Our work goes beyond generic training to deep role clarity, skill alignment, and industry-specific execution.",
    icon: <Layers className="w-8 h-8 text-sky-600" />,
    bgClass: "bg-sky-50",
    borderHover: "hover:border-sky-200"
  }
];