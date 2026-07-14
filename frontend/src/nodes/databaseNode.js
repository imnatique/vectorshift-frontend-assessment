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
          style={{ width: "100%" }}
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};