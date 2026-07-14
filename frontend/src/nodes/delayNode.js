import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const DelayNode = ({ id }) => {
  const [seconds, setSeconds] = useState(5);

  return (
    <BaseNode
      title="Delay"
      subtitle="Wait"
      headerColor="#dc2626"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <label>
        Seconds
        <input
          type="number"
          style={{ width: "100%" }}
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};