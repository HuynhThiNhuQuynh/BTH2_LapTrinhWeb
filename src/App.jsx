// Import các component chính
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";

// Import CSS tổng
import "./styles/style.css";

// Component gốc
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
    </>
  );
}

export default App;