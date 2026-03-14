import React from 'react';
import { 
  Rocket, 
  Briefcase, 
  Users, 
  TrendingUp 
} from 'lucide-react';


export  const learningPaths = [
    {
      role: "Entry-level professionals",
      icon: <Rocket className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50",
      borderHover: "hover:border-indigo-200",
      shadowHover: "hover:shadow-indigo-500/10"
    },
    {
      role: "Account executives",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50",
      borderHover: "hover:border-blue-200",
      shadowHover: "hover:shadow-blue-500/10"
    },
    {
      role: "Sales managers",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      borderHover: "hover:border-emerald-200",
      shadowHover: "hover:shadow-emerald-500/10"
    },
    {
      role: "Revenue-focused leaders",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-50",
      borderHover: "hover:border-purple-200",
      shadowHover: "hover:shadow-purple-500/10"
    }
  ];
