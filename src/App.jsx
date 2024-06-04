import './App.css'
import Registration from "./pages/Registration.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Layout from "./layout/Layout.jsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                }
            ]
        },
        {
            path: "/registration",
            element: <Registration />
        },
        {
            path: "/login",
            element: <Login />
        }

    ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
