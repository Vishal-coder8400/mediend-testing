import React from 'react';

export type StatCardProps = {
  title: string;
  description: string;
  bgColor?: string; // Default color class for background
  titleColor?: string; // Default color class for title
  descriptionColor?: string; // Default color class for description
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  description,
  bgColor = 'bg-gray-50', // Default background
  titleColor = 'text-blue-600', // Default title color
  descriptionColor = 'text-gray-700' // Default description color
}) => {
  return (
    <div
      className={`${bgColor} px-6 md:px-24 py-6 rounded-lg shadow-lg text-center flex justify-center items-center flex-col`}
    >
      <div className="flex justify-center items-center">
        <div className={`text-4xl font-semibold ${titleColor}`}>{title}</div>
      </div>
      <div className={`text-sm ${descriptionColor}`}>{description}</div>
    </div>
  );
};

export default StatCard;