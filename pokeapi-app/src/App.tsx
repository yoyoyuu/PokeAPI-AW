import { Routes, Route } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import { PokemonDetail } from "./pages/PokemonDetail";

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
