import React from "react";
import "./index.css";
import Button from "../../../../Shared/Button";

const GoalForm = () => {
  return (
    <form>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" placeholder="Enter Goal Name..." />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default GoalForm;
