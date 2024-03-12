import React from "react";

interface BadgeProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <span className={`${color} text-white px-2 py-1 rounded-full text-sm`}>
      {text}
    </span>
  );
};

export default Badge;
