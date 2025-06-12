import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full font-sans bg-gradient-to-br from-white via-slate-50 to-emerald-50">
        <Header />
        <main className="flex-1 w-full">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
