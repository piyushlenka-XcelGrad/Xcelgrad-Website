import { 
  Compass, 
  Clock, 
  Layers, 
  MonitorPlay, 
  Wrench, 
  Rocket, 
  Target, 
  Map,
} from 'lucide-react';
export   const mistakes = [
    {
      text: "Entering sales without understanding role expectations",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      text: "Treating sales as temporary",
      icon: <Clock className="w-6 h-6 text-indigo-600" />
    },
    {
      text: "Lack of structured capability building",
      icon: <Layers className="w-6 h-6 text-indigo-600" />
    }
  ];

 export  const supports = [
    {
      title: "Career orientation webinars",
      icon: <MonitorPlay className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Role-readiness workshops",
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Internship programs",
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      title: "Live industry assignments",
      icon: <Target className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      title: "Entry-level job pathways",
      icon: <Map className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];