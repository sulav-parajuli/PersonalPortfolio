import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext.jsx"; // Import AppProvider
//Import other components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <>
                <Route path="/" element={<Home />} />
              </>
            </Routes>
          </div>
        </AppProvider>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
