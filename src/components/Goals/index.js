import React from "react";
import "./index.css";
import GoalItem from "./GoalItem";

const Goals = () => {
  return (
    <ul className="goal-list">
      <GoalItem>Item 1</GoalItem>
      <GoalItem>Item 2</GoalItem>
      <GoalItem>Item 3</GoalItem>
      <GoalItem>Item 4</GoalItem>
    </ul>
  );
};

export default Goals;
