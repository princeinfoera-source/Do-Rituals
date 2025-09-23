import React, { useId } from "react";

const DecimalStarRating = ({ rating, size = 28 }) => {
  const totalStars = 5;
  const uniqueId = useId();

  const starPath =
    "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

  const getFillPercent = (starIndex) => {
    const fill = rating - starIndex;
    if (fill >= 1) return 100;
    if (fill <= 0) return 0;
    return fill * 100;
  };

  return (
    <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
      {[...Array(totalStars)].map((_, i) => {
        const fillPercent = getFillPercent(i);
        const gradId = `${uniqueId}-grad-${i}`;

        return (
          <svg
            key={i}
            width={size}   // ⭐ dynamic size
            height={size}
            viewBox="0 0 24 24"
            style={{ display: "inline-block" }}
          >
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset={`${fillPercent}%`} stopColor="#fbbf24" />
                <stop offset={`${fillPercent}%`} stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
            </defs>
            <path d={starPath} fill={`url(#${gradId})`} />
          </svg>
        );
      })}
      <span
        style={{
          marginLeft: "6px",
          fontWeight: "bold",
          fontSize: "14px",   // 🔒 fixed text size
          color: "#374151",
        }}
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default DecimalStarRating;
