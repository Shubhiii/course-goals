import "./App.css";
import React from "react";
import Goals from "./components/Goals";
import CreateGoal from "./components/Goals/Create";
import Container from "./components/Shared/Container";

function App() {
  const [goalData, setGoalData] = React.useState([]);

  const handleAddGoal = (goal) => {
    setGoalData((prevGoal) => [goal, ...prevGoal]);
  };

  const handleDelete = (goalId) => {
    setGoalData((prevGoals) => {
      return prevGoals.filter((item) => item.id !== goalId);
    });
  };

  return (
    <Container>
      <CreateGoal onAdd={handleAddGoal} />
      <Goals onDelete={handleDelete} items={goalData} />
    </Container>
  );
}

export default App;
