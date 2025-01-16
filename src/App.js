import React, { lazy, Suspense } from "react";
const BarChart = lazy(() => import("./components/BarChart"));
const LineChart = lazy(() => import("./components/LineChart"));
const PieChart = lazy(() => import("./components/PieChart"));

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  padding: "10px",
  backgroundColor: "#e8f4f8",
  minHeight: "100vh",
};

const rowStyle = {
  display: "flex",
  gap: "25px",
};

const box = {
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5)",
  padding: "10px",
  borderRadius: "5px",
};

const leftBoxStyle = {
  ...box,
  flex: 1,
};

const rightBoxStyle = {
  ...box,
  flex: 1,
};

const LazyLoader = ({ component: Component }) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Component />
  </Suspense>
);

const App = () => {
  return (
    <>
      <div style={containerStyle}>
        <div style={rowStyle}>
          <div style={leftBoxStyle}>
            <LazyLoader component={PieChart} />
          </div>
          <div style={rightBoxStyle}>
            <LazyLoader component={LineChart} />
          </div>
        </div>

        <div style={rowStyle}>
          <div style={leftBoxStyle}>
            <LazyLoader component={BarChart} />
          </div>
          <div style={rightBoxStyle}>Something</div>
        </div>
      </div>
    </>
  );
};

export default App;
