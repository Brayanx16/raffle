import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import { RecoilRoot } from "recoil";
import Raffle from "./pages/Raffle";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Settings />}></Route>
          <Route path="/sorteio" element={<Raffle />}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
