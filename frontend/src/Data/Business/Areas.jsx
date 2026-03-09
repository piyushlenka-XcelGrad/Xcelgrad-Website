import { 
  Briefcase,
  Network,
  UserPlus,
  Zap,
  Layers
} from 'lucide-react';

export  const engagementAreas = [
    {
      title: "GTM & Sales Role Structuring",
      icon: <Network className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Performance-Linked B2B Sales Hiring",
      icon: <UserPlus className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Sales Capability Development",
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Long-Term Talent Pipeline Building",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];