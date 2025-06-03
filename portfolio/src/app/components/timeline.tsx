"use client";
import React from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  isRight: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, date, content, isRight }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        isRight ? "lg:flex-row-reverse" : ""
      } items-start mb-10 w-full relative`}
      data-aos="fade-up"
    >
      {/* Dot — visible only on large screens */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-4 h-4 bg-[var(--accent)] rounded-full border-2 border-white" />
      </div>

      {/* Card */}
      <div
        className={`bg-[var(--surface)] text-[var(--text)] shadow-lg rounded-lg px-6 py-4 lg:w-5/12 w-full ml-5 ${
          isRight ? "lg:text-right lg:mr-auto" : "lg:text-left lg:ml-auto"
        }`}
      >
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        {subtitle && <h6 className="text-sm text-[var(--text-muted)] italic">{subtitle}</h6>}
        <p className="text-sm text-[var(--text-muted)]">{date}</p>
        {content && <p className="mt-2 text-sm">{content}</p>}
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineItems: TimelineItemProps[] = [
    {
      title: "Software Engineering Intern",
      subtitle: "Adobe",
      date: "May 2025 - August 2025",
      content: "",
      isRight: false
    },
    {
      title: "Master's in Computer Science",
      subtitle: "Syracuse University",
      date: "Aug 2024 - May 2026",
      content: "",
      isRight: true
    },
    {
      title: "Product Engineer - AI Developer",
      subtitle: "TCS - Advance Drug Development (ADD) platform",
      date: "Jan 2023 - July 2024",
      content: "",
      isRight: false
    },
    {
        title: "Systems Engineer",
        subtitle: "TCS - Advance Drug Development (ADD) platform",
        date: "Jun 2022 - Dec 2023",
        content: "",
        isRight: false
    },
    {
      title: "Smart India Hackathon winner",
      subtitle: "",
      date: "Jun 2022",
      content: "",
      isRight: true
    },
    {
      title: "Freelance Developer",
      subtitle: "Change is us",
      date: "Feb 2022 - Mar 2022",
      content: "",
      isRight: false
    },
    {
      title: "Back-end Developer intern",
      subtitle: "Looseleaf",
      date: "Aug 2021 - Feb 2022",
      content: "",
      isRight: true
    },
    {
      title: "Training and Placement coordinator",
      subtitle: "D.B.I.T",
      date: "May 2021 - Mar 2022",
      content: "",
      isRight: false
    },
    {
      title: "Technical Head",
      subtitle: "Computer Society of India - D.B.I.T",
      date: "Jun 2020 - Jun 2021",
      content: "",
      isRight: true
    },
    {
      title: "Technical Head",
      subtitle: "Colosseum: Techfest - D.B.I.T",
      date: "Jan 2021 - Mar 2021",
      content: "",
      isRight: false
    },
    {
      title: "Reporting Head",
      subtitle: "DOMAIN: Math Club - D.B.I.T",
      date: "Jun 2020 - Jun 2021",
      content: "",
      isRight: true
    },
    {
      title: "Publicity Head",
      subtitle: "Physics Club - D.B.I.T",
      date: "Jun 2020 - Jun 2021",
      content: "",
      isRight: false
    },
    {
      title: "Under-grad student",
      subtitle: "Don Bosco Institute of Technology (D.B.I.T)",
      date: "Jun 2018 - May 2022",
      content: "",
      isRight: true
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left--1 lg:left-1/2 transform lg:-translate-x-1/2 w-1 bg-gray-700 h-full z-0" />
        
        {/* Timeline Items */}
        {timelineItems.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
