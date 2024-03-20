import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeApp from "./pages/HomeApp";
import Layout from "./pages/Layout";
import AjoutAction from "./pages/AjoutAction";
import MofifAction from "./pages/ModifAction";
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '36px',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 500, // FontWeight medium
      fontSize: '24px',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><HomeApp /></Layout>} />
          <Route path="home/add" element={<Layout><AjoutAction /></Layout>} />
          <Route path="home/edit/:id" element={<Layout><MofifAction /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
