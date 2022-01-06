import React from "react";
import "./index.css";
import Button from "../../../../Shared/Button";

const GoalForm = ({ goalData }) => {
  const [goalName, setGoalName] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    console.log(event.target.value.trim().length > 0);
    setGoalName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (goalName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const goal = {
      text: goalName,
    };
    goalData(goal);

    setGoalName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"form-control " + (!isValid && "invalid")}>
        <label>Course Goal</label>
        <input
          type="text"
          value={goalName}
          onChange={handleChange}
          placeholder="Enter Goal Name..."
        />
      </div>
      <Button disabled={!isValid} type="submit">
        Add Goal
      </Button>
      {/* <Button type="submit">Add Goal</Button> */}
    </form>
  );
};

export default GoalForm;
