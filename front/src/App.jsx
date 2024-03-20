import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeApp from "./pages/HomeApp";
import Accueil from "./pages/Accueil";
import AjoutAction from "./pages/AjoutAction";

const theme = createTheme(); // Création du thème par défaut

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/home" element={<HomeApp />} />
            <Route path="home/add" element={<AjoutAction />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
