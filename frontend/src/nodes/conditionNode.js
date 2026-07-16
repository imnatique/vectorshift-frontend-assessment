import { BaseNode } from "../components/BaseNode";

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      subtitle="If / Else"
      headerColor="#ca8a04"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <div>Evaluate condition</div>
    </BaseNode>
  );
};
