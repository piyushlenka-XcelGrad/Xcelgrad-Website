import {
  Users,
  GraduationCap,
  Zap,
  BarChart3,
  ArrowRight,
  ChevronRight,
} from "lucide-react";


export  const Features = [
    {
      title: "Hiring",
      description:
        "Streamline your recruitment process to find the perfect cultural and technical fit. We connect you with top-tier talent ready to drive your vision forward.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Training",
      description:
        "Empower your workforce with cutting-edge skills and modern methodologies. Our custom programs ensure continuous professional growth and technical excellence.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Freshers Induction",
      description:
        "Transform recruiting classes into day-one contributors instantly. We bridge the gap between academic theory and corporate reality with intensive bootcamps.",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Sales Consulting",
      description:
        "Optimize operational efficiency through deep data-driven insights. We identify bottlenecks and implement strategic solutions for maximum ROI.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-rose-500",
      lightColor: "bg-rose-50",
      textColor: "text-rose-600",
    },
  ];