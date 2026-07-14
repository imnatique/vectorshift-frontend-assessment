import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("Add");

  return (
    <BaseNode
      title="Math"
      subtitle="Arithmetic"
      headerColor="#0f766e"
      inputs={[
        { id: `${id}-a` },
        { id: `${id}-b` },
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <select
        style={{ width: "100%" }}
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option>Add</option>
        <option>Subtract</option>
        <option>Multiply</option>
        <option>Divide</option>
      </select>
    </BaseNode>
  );
};