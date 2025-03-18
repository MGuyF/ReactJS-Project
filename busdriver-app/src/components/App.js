import Login from "./Login";
import Register from "./Register";
import AddBusDriver from "./AddBusDriver";
import BusDriversDatatableList from "./BusDriversDatatableList";
import BusDriverDatatableRow from "./BusDriverDatatableRow";
import UpdateBusDriver from "./UpdateBusDriver";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Register"  component={Register} />
        <Route path="/AddBusDriver"  component={AddBusDriver} />
        <Route path="/BusDriversDatatableList"  component={BusDriversDatatableList} />
        <Route path="/BusDriverDatatableRow"  component={BusDriverDatatableRow} />
        <Route path="/UpdateBusDriver"  component={UpdateBusDriver} />
      </Switch>
    </Router>
  );
}

export default App;
