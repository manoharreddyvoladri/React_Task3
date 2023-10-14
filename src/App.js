import "./App.css";
import ColorPicker from "./Components/ColorPicker";

function App() {
  return (
    <div className="App">
      <ColorPicker
        colors={[
          "#Ff0000",
          "#00ff1a",
          "#001cff",
          "#Fffa00",
          "#Fa00ff",
          "#00f2ff",
          "#Ffbb00",
          "#9700ff",
          "#ffc0cb",
          "#088404",
          "#fe6347",
          "#00cfd1",
          "#8b4413",
          "#ff8b00",
          "#4683b4",
          "#fed700",
        ]}
      />
    </div>
  );
}

export default App;
