import { GraduationCap, Globe, Trophy } from 'lucide-react';

export  const visionCards = [
    {
      title: "Enterprise Sales Enablement",
      icon: <GraduationCap className="w-10 h-10" />,
      content: "We deliver hands-on, industry-aligned sales training designed for B2B environments equipping professionals with real-world selling skills across IT, HoReCa and HR Tech to perform confidently from Day 1.",
      isHighlighted: false
    },
    {
      title: "B2B Industry Ecosystem",
      icon: <Globe className="w-10 h-10" />,
      content: "We foster a strong network of sales professionals, mentors, and B2B organizations that bridges the gap between learning and revenue enabling faster onboarding, sharper execution, and consistent deal outcomes.",
      isHighlighted: true
    },
    {
      title: "High-Impact Sales Careers",
      icon: <Trophy className="w-10 h-10" />,
      content: "We prepare future sales professionals to drive pipelines, close meaningful deals, and create measurable business impact becoming productive contributors from their very first day on the job.",
      isHighlighted: false
    }
  ];