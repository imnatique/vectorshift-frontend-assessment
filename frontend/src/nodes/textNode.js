import { useMemo, useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");

  // Find all variables like {{input}}
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }

    // Remove duplicates
    return [...new Set(vars)];
  }, [text]);

  // Dynamic size
  const width = Math.max(240, Math.min(450, text.length * 8));
  const rows = Math.max(3, text.split("\n").length);

  return (
    <BaseNode
      title="Text"
      subtitle="Dynamic Text"
      headerColor="#ea580c"
      width={width}
      minHeight={140}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
      }))}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <label>
        Text
      </label>

      <textarea
        value={text}
        rows={rows}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          resize: "none",
          height: `${Math.max(80, rows * 24)}px`
        }}
      />
    </BaseNode>
  );
};