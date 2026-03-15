import React from 'react';
import { 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Target
} from 'lucide-react';


  export const features = [
    {
      title: "Curated B2B sales opportunities",
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-200"
    },
    {
      title: "Structured learning aligned to execution",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-200"
    },
    {
      title: "Role-based progression clarity",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-200"
    },
    {
      title: "Long-term performance orientation",
      icon: <Target className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "hover:border-purple-200"
    }
  ];