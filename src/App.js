import "./App.css";
import Goals from "./components/Goals";
import CreateGoal from "./components/Goals/Create";
import Container from "./components/Shared/Container";

function App() {
  return (
    <Container>
      <CreateGoal />
      <Goals />
    </Container>
  );
}

export default App;
