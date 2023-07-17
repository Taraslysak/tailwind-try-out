import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { MainWindow } from "./components/layout/MainWindow";
import { Sidebar } from "./components/layout/Sidebar/Sidebar";
import "./index.css";

function App() {
  return (
    <div className="bg-slate-100 flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <MainWindow />
      </div>
      <Footer />
    </div>
  );
}

export default App;
