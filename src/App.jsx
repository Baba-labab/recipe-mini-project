import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <NavBar />
      <SideBar />
      <Content />

      <Footer />
    </div>
  );
}

export default App;
