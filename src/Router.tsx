import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhoAmI from "./Components/WhoAmI";
import Landing from "./pages/Landing";
import { theme } from "./styles/theme";

const Router = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* <Route path="/" element={<Login />} />
        <Route element={<MainLayout><Outlet/></MainLayout>}>
          <Route path="/main" element={<Disparo /> } />
          <Route path="/sessions" element={<Sessions/>} />
          <Route path="/campaigns" element={<Campaigns/>} />
        </Route> */}
        <Route path="/whoami" element={<WhoAmI/>}/>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default Router;
