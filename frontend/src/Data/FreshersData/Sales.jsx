
import { 
  TrendingUp, 
  Target, 
  Award, 
  LineChart, 
} from 'lucide-react';

  export const benefits = [
    {
      title: "High growth potential",
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Direct business impact",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Leadership pathways",
      icon: <Award className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      title: "Performance-linked rewards",
      icon: <LineChart className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    }
  ];
