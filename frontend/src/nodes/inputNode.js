import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      title="Input"
      subtitle="Pipeline Input"
      headerColor="#2563eb"
      outputs={[
        {
          id: `${id}-value`,
        },
      ]}
    >
      <label>
        Name
        <input
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            fontSize: 13,
            boxSizing: "border-box",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Type
        <select
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            fontSize: 13,
            boxSizing: "border-box",
            cursor: "pointer",
          }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Text</option>
          <option>File</option>
        </select>
      </label>
    </BaseNode>
  );
};
