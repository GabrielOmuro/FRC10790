import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import History from "./pages/history.jsx";
import Strategy from "./pages/strategy.jsx";
import Arasunuap1 from "./pages/arasunuap1.jsx";
import Competition from "./pages/competition.jsx";
import SeasonChallenge from "./pages/seasonChallenge.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/teamhistory",
    element: <History />,
  },
  {
    path: "/competition",
    element: <Competition />,
  },
  {
    path: "/arasunuap1",
    element: <Arasunuap1 />,
  },
  {
    path: "/seasonChallenge",
    element: <SeasonChallenge />
  },
  {
    path: "/strategy",
    element: <Strategy/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
