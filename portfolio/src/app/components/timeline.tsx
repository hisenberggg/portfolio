// components/Timeline.tsx
import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  content: string;
  isRight: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, date, content, isRight }) => (
  <div className={`mb-8 flex justify-between items-center w-full ${isRight ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col`}>
    <div className="order-1 lg:w-5/12 w-full"></div>
    {/* Circle element hidden in mobile view */}
    <div className={`z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full max-sm:hidden`}>
      <h1 className="mx-auto font-semibold text-lg text-white">•</h1>
    </div>
    {/* Timeline item content */}
    <div className={`order-1 bg-gray-800 rounded-lg shadow-xl lg:w-5/12 w-full px-6 py-4 ${isRight ? "lg:text-right" : "lg:text-left"} text-left`}>
      <h3 className="mb-1 font-bold text-white text-xl">{title}</h3>
      <h6 className="mb-1 text-white text-xs">{subtitle}</h6>
      <span className="text-sm text-gray-400">{date}</span>
      <div className="text-sm font-medium text-gray-300">{content}</div>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  // Example data for timeline items
  const timelineItems: TimelineItemProps[] = [
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
      subtitle: "D.B.I.T",
      date: "Jun 2018 - May 2022",
      content: "",
      isRight: true
    },
  ];

  return (
    <div className="container mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        {/* Updated border styling */}
        <div className="border-2-2 border-gray-800 absolute h-full border left-0 lg:left-1/2"></div>
        {/* Render TimelineItems dynamically */}
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            content={item.content}
            isRight={item.isRight}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
