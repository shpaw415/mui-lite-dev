import { CircularProgress, LinearProgress } from "@/mui/Progress";
import { useEffect, useState } from "react";

export function LinearProgressTest() {
  const [val, setVal] = useState(10);
  useEffect(() => {
    setTimeout(() => setVal(50), 2000);
  }, []);
  return (
    <div className="space-y-3">
      <LinearProgress color="primary" />
      <LinearProgress color="secondary" />
      <LinearProgress color="error" />
      <LinearProgress color="warning" />
      <LinearProgress color="success" />
      <LinearProgress value={val} variant="determinate" color="primary" />
      <LinearProgress value={10} variant="determinate" color="secondary" />
      <LinearProgress value={10} variant="determinate" color="error" />
      <LinearProgress value={10} variant="determinate" color="success" />
      <LinearProgress value={10} variant="determinate" color="warning" />
      <LinearProgress
        value={val}
        valueBuffer={val + 20}
        variant="buffer"
        color="primary"
      />
      <LinearProgress
        value={10}
        valueBuffer={20}
        variant="buffer"
        color="secondary"
      />
      <LinearProgress
        value={10}
        valueBuffer={20}
        variant="buffer"
        color="error"
      />
      <LinearProgress
        value={10}
        valueBuffer={20}
        variant="buffer"
        color="success"
      />
      <LinearProgress
        value={10}
        valueBuffer={20}
        variant="buffer"
        color="warning"
      />
      <CircularProgress />
    </div>
  );
}

export function CircularProgressTest() {
  return <CircularProgress color="error" size={4} />;
}
