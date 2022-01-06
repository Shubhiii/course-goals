import React from "react";
import "./index.css";
import GoalItem from "./GoalItem";

const Goals = ({ items, onDelete }) => {
  // console.log("onDelete", items);
  let goalData = <p style={{ textAlign: "center" }}>No Data Found!</p>;

  if (items.length > 0) {
    goalData = (
      <ul className="goal-list">
        {items.map((item) => (
          <GoalItem onDelete={onDelete} id={item.id} key={item.id}>
            {item.text}
          </GoalItem>
        ))}
      </ul>
    );
  }

  return <>{goalData}</>;
};

export default Goals;
