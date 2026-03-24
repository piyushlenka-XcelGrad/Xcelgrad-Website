import React from 'react';
import { Target, BookOpen, UserCheck } from 'lucide-react';

export const steps = [
  {
    id: "01",
    title: "Role Clarity",
    description:
      "Define what each B2B sales role requires — from entry-level sales to revenue leadership — aligned with real GTM realities.",
    icon: <Target className="w-7 h-7 text-indigo-600" />,
    badgeColor: "bg-indigo-100 text-indigo-700",
    iconBg: "bg-indigo-50",
    borderColor: "hover:border-indigo-200"
  },
  {
    id: "02",
    title: "Skill Development",
    description:
      "Structured learning focused on practical B2B execution, not generic communication training.",
    icon: <BookOpen className="w-7 h-7 text-blue-600" />,
    badgeColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-50",
    borderColor: "hover:border-blue-200"
  },
  {
    id: "03",
    title: "Performance-Linked Hiring",
    description:
      "Connecting businesses with role-aligned sales talent to reduce ramp-up time and improve consistency in results.",
    icon: <UserCheck className="w-7 h-7 text-emerald-600" />,
    badgeColor: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-emerald-50",
    borderColor: "hover:border-emerald-200"
  }
];