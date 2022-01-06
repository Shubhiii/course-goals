import React from "react";
import Card from "../../Shared/Card";
import GoalForm from "./components/GoalForm";

const CreateGoal = ({ onAdd }) => {
  const [count, setCount] = React.useState(0);
  const handleGoalData = (data) => {
    setCount((prevState) => prevState + 1);
    const goalObject = {
      ...data,
      id: count,
    };

    onAdd(goalObject);

    // console.log(goalObject, "data");
  };

  return (
    <Card>
      <GoalForm goalData={handleGoalData} />
    </Card>
  );
};

export default CreateGoal;
