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
      title: "Product Engineer",
      subtitle: "TCS - Advance Drug Development (ADD) platform",
      date: "Jun 2022 - July 2024",
      content: "",
      isRight: false
    },
    {
        title: "Systems Engineer",
        subtitle: "TCS - Advance Drug Development (ADD) platform",
        date: "Jun 2022 - July 2024",
        content: "",
        isRight: false
      },
    {
      title: "Intern",
      subtitle: "Product Engineer",
      date: "Jun 2019 - Dec 2019",
      content: "Assisted in the development of internal tools to improve the efficiency of the development team. Participated in code reviews and contributed to the design of new features.",
      isRight: true
    },
    {
      title: "Freelance Developer",
      subtitle: "Product Engineer",
      date: "Jan 2018 - May 2019",
      content: "Worked on various freelance projects, including website development, plugin creation, and API integration. Delivered high-quality solutions to clients.",
      isRight: false
    },
    {
      title: "Freelance Developer",
      subtitle: "Product Engineer",
      date: "Jan 2018 - May 2019",
      content: "Worked on various freelance projects, including website development, plugin creation, and API integration. Delivered high-quality solutions to clients.",
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
