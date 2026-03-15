import React from 'react';
import { 
  UserCheck, 
  Calendar, 
  Target, 
  Layers, 
  TrendingUp,

} from 'lucide-react';


export  const topics = [
    {
      title: "Role clarity in B2B sales",
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Sales planning discipline",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Prospecting intelligence",
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      title: "Execution frameworks",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      title: "Performance review systems",
      icon: <TrendingUp className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];
