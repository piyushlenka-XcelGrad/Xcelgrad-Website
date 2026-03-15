import React from 'react';
import { 
  Target, 
  ShieldCheck, 
  Zap, 
  Layers 
} from 'lucide-react';



export  const insightPillars = [
    {
      title: "B2B Sales Skills",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Role Clarity",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Execution Discipline",
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Performance Systems",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];