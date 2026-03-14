  import { Briefcase, MonitorPlay, Target, LineChart } from 'lucide-react';
  export const workshops = [
    {
      title: "Real business cases",
      icon: <Briefcase className="w-7 h-7 text-indigo-600" />,
      bg: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Live simulations",
      icon: <MonitorPlay className="w-7 h-7 text-blue-600" />,
      bg: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Execution planning",
      icon: <Target className="w-7 h-7 text-emerald-600" />,
      bg: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Performance review structures",
      icon: <LineChart className="w-7 h-7 text-purple-600" />,
      bg: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];