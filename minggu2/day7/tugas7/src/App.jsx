import EventHandler from "./Components/EventHandler";
import SyntheticEventDemo from "./Components/SyntheticEventDemo";
import ControlledComponentDemo from "./Components/ControlledComponentDemo";
import UncontrolledComponentDemo from "./Components/UncontrolledComponentDemo";
import FormValidationDemo from "./Components/FormValidationDemo";
function App() {
  return (
    <div>
      <EventHandler />
      <SyntheticEventDemo/>
      <ControlledComponentDemo/>
      <UncontrolledComponentDemo/>
      <FormValidationDemo/>
    </div>
  );
}

export default App;
