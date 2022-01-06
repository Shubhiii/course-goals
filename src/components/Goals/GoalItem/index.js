import React from "react";
import Button from "../../Shared/Button";
import "./index.css";

const GoalItem = ({ children, id, onDelete }) => {
  console.log(id, "id");
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item">
      {children}
      <Button type={"button"} onClick={handleDelete}>
        Delete
      </Button>
    </li>
  );
};

export default GoalItem;
