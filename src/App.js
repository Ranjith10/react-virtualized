import ReactPicky from "./react-picky/ReactPicky";
import BasicExample from "./react-virtualized/BasicExample";
import ReactVirtualizedSelect from "./react-virtualized/ReactVirtualizedSelect";
import FixedList from "./react-window/FixedList";
import ReactWindowMultiSelect from "./react-window/ReactWindowMultiSelect";
import ReactWindowSelect from "./react-window/ReactWindowSelect";

const App = () => {
  return (
    <div className="App">
      {/* <BasicExample />
      <ReactVirtualizedSelect /> 
      <FixedList />*/}
      <ReactWindowSelect />
      <ReactWindowMultiSelect />
      <ReactPicky />
    </div>
  );
}

export default App;
