import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";
import './index.css'; // or './App.css' if you put Tailwind imports there

function App(){
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: routes
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;