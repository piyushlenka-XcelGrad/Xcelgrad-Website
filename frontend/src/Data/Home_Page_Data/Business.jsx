
import { 
  LineChart, 
  Users, 
  BookOpen,
  Briefcase
} from 'lucide-react';


  export const pillars = [
    {
      title: "GTM Strategy",
      description: "Aligning execution with market realities.",
      icon: <LineChart className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Role Design",
      description: "Structuring teams for maximum efficiency.",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Targeted Hiring",
      description: "Connecting you with role-aligned talent.",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Skill Development",
      description: "Building capabilities that drive revenue.",
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];
