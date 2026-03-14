import { 
  MessageSquare, 
  Lightbulb, 
  Briefcase, 
  Radio, 
} from 'lucide-react';  
  
  export const communityFeatures = [
    {
      text: "Discuss execution challenges",
      icon: <MessageSquare className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Exchange structured thinking",
      icon: <Lightbulb className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Share field experiences",
      icon: <Briefcase className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Participate in live discussions",
      icon: <Radio className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    }
  ]