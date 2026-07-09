import { BrowserRouter, Route, Routes } from "react-router-dom";
import BirthdayPage from "./pages/birthPage";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/birthday" element={<BirthdayPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;