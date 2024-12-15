import HomePage from "./pages/HomePage";
import Navigation from "./components/NavBar";

function App() {
  return (
    <div>
      <Navigation />
      <div style={{ marginLeft: "75px", marginTop: "85px" }}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
