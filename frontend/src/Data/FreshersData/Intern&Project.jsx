import { 
  Users, 
  Target, 
  Search, 
  BarChart3, 
  Award,
} from 'lucide-react';

export   const opportunities = [
    {
      text: "Working with B2B teams",
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      text: "Live prospecting exercises",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      text: "Account research assignments",
      icon: <Search className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      text: "Sales planning simulations",
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      text: "Performance-based evaluation",
      icon: <Award className="w-8 h-8 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];
