import { 
  GraduationCap, 
  MonitorPlay, 
  Rocket, 
  Target,
} from 'lucide-react';



export  const programs = [
    {
      title: "Webinars",
      description: "Learn directly from B2B sales veterans.",
      icon: <MonitorPlay className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-200"
    },
    {
      title: "Internships",
      description: "Gain hands-on experience in real environments.",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-200"
    },
    {
      title: "Live Projects",
      description: "Solve actual business problems.",
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-200"
    },
    {
      title: "Role-Readiness",
      description: "Structured programs to make you day-one ready.",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "hover:border-purple-200"
    }
  ];
