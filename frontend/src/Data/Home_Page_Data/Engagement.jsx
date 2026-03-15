import { 
  Briefcase, 
  Network, 
  Zap
} from 'lucide-react';


export const salesEngagements = [
  {
    id: 1,
    category: "Talent Acquisition",
    title: "Performance-Linked Hiring",
    description: "Executed comprehensive hiring mandates across B2B SaaS and HoReCa sectors, ensuring talent is perfectly aligned with execution needs.",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    bgClass: "bg-indigo-50",
    borderHover: "hover:border-indigo-200"
  },
  {
    id: 2,
    category: "Strategy & Alignment",
    title: "Role Structuring & GTM",
    description: "Led comprehensive sales role structuring and Go-To-Market alignment projects to eliminate ambiguity and drive scalable growth.",
    icon: <Network className="w-6 h-6 text-blue-600" />,
    bgClass: "bg-blue-50",
    borderHover: "hover:border-blue-200"
  },
  {
    id: 3,
    category: "Training & Development",
    title: "Capability Enhancement",
    description: "Delivered execution-focused sales capability enhancement programs designed to turn inconsistent efforts into predictable revenue.",
    icon: <Zap className="w-6 h-6 text-emerald-600" />,
    bgClass: "bg-emerald-50",
    borderHover: "hover:border-emerald-200"
  }
];