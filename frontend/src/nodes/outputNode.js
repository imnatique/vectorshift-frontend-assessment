import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [type, setType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      title="Output"
      subtitle="Pipeline Output"
      headerColor="#16a34a"
      inputs={[
        {
          id: `${id}-value`,
        },
      ]}
    >
      <label>
        Name
        <input
          style={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Type
        <select
          style={{ width: "100%" }}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Text</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};