import React from "react";
import {
  calculateAverageRating,
  calculateSuccessRate,
  getMostUsedPlatform,
  getTopCategory,
} from "../utils/calculations";

const dashboardBoxStyle = {
  fontFamily: "'Roboto', sans-serif",
  flex: 1,
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  padding: "15px",
  color: "#ffffff",
  textAlign: "center",
  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};

const boxStyles = [
  {
    ...dashboardBoxStyle,
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
  },
  {
    ...dashboardBoxStyle,
    background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
  },
  {
    ...dashboardBoxStyle,
    background: "linear-gradient(135deg, #42e695, #3bb2b8)",
  },
  {
    ...dashboardBoxStyle,
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
];

const hoverEffect = {
  transform: "translateY(-5px)",
  boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
};

const TopBoxes = () => {
  const successRate = calculateSuccessRate();
  const [topCategoryName, topCategoryCount] = getTopCategory();
  const userSatisfaction = calculateAverageRating();
  const [mostUsedPlatformName, mostUsedPlatformUsers] = getMostUsedPlatform();

  const boxData = [
    {
      title: "Total Queries",
      content: `Success Rate: ${successRate}%`,
      style: boxStyles[0],
    },
    {
      title: "Top Category",
      content: `${topCategoryName} (${topCategoryCount} queries)`,
      style: boxStyles[1],
    },
    {
      title: "User Satisfaction",
      content: `Rating: ${userSatisfaction} / 5`,
      style: boxStyles[2],
    },
    {
      title: "Most Used Platform",
      content: `${mostUsedPlatformName} (${mostUsedPlatformUsers} users)`,
      style: boxStyles[3],
    },
  ];

  return (
    <>
      {boxData.map((box, index) => (
        <div
          key={index}
          style={box.style}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = hoverEffect.transform;
            e.currentTarget.style.boxShadow = hoverEffect.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = box.style.boxShadow;
          }}
        >
          <h3 style={{ margin: 0 }}>{box.title}</h3>
          <p style={{ margin: 0, marginTop: "10px", fontSize: "14px" }}>
            {box.content}
          </p>
        </div>
      ))}

      {/* <div style={dashboardBoxStyle}>
        <h3>Total Queries</h3>
        <p>Success Rate: {successRate}%</p>
      </div>

      <div style={dashboardBoxStyle}>
        <h3>Top Category</h3>
        <p>{topCategoryName}</p>
      </div>

      <div style={dashboardBoxStyle}>
        <h3>User Satisfaction</h3>
        <p>Rating: {userSatisfaction} / 5</p>
      </div>

      <div style={dashboardBoxStyle}>
        <h3>Most Used Platform</h3>
        <p>{mostUsedPlatformName}</p>
      </div> */}
    </>
  );
};

export default TopBoxes;
