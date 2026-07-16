import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const DatabaseNode = ({ id }) => {
  const [table, setTable] = useState("users");

  return (
    <BaseNode
      title="Database"
      subtitle="SQL Query"
      headerColor="#10b981"
      inputs={[{ id: `${id}-query` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <label>
        Table
        <input
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            fontSize: 13,
            boxSizing: "border-box",
          }}
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
