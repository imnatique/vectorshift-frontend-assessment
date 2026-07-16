import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      subtitle="Generate AI responses"
      headerColor="#9333ea"
      inputs={[{ id: `${id}-system` }, { id: `${id}-prompt` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <div style={{ fontSize: 13 }}>Large Language Model</div>
    </BaseNode>
  );
};
