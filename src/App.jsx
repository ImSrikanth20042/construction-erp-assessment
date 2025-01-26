import "./App.css";
import NavBar from "./NavBar";
import { Dashboard, Billing, Inventory, Projects, Resources } from "./Sections";

function App() {
  return (
    <main className="relative overflow-hidden flex h-screen">
      <NavBar className=" p-1" />
      <div className="flex-1  bg-gray-100 overflow-y-scroll">
        <section id="dashboard" className=" p-0 bg-gray-100 flex-1">
          <Dashboard />
        </section>
        <section id="projects" className=" p-0 bg-white">
          <Projects />
        </section>
        <section id="resources" className=" p-10 bg-white">
          <Resources />
        </section>
        <section id="billing" className=" p-10 bg-white">
          <Billing />
        </section>
        <section id="inventory" className="p-10 bg-gray-500">
          <Inventory />
        </section>
      </div>
    </main>
  );
}

export default App;
