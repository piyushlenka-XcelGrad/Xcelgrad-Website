import { 
  MonitorPlay, 
  Briefcase, 
  Compass,
} from 'lucide-react';
export   const nextSteps = [
    {
      title: "Register for Upcoming Webinar",
      icon: <MonitorPlay className="w-8 h-8 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-300",
      buttonColor: "text-indigo-600 group-hover:text-indigo-700",
      shadowHover: "hover:shadow-[0_20px_40px_rgba(79,70,229,0.12)]",
      link : ""
    },
    {
      title: "Apply for Internship",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-300",
      buttonColor: "text-blue-600 group-hover:text-blue-700",
      shadowHover: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
      link : "/jobs"
    },
    {
      title: "Explore Entry-Level Roles",
      icon: <Compass className="w-8 h-8 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-300",
      buttonColor: "text-emerald-600 group-hover:text-emerald-700",
      shadowHover: "hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]",
      link : "/jobs"
    }
  ];