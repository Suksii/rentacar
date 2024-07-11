import './App.css'
import Registration from "./pages/Registration.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import CarAction from "./pages/CarAction.jsx";
import Contact from "./pages/Contact.jsx";
import Clients from "./pages/Clients.jsx";
import Reservations from "./pages/Reservations.jsx";
import {ModalProvider} from "./context/ModalContext.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import axios from "axios";
import {UserProvider} from "./context/UserContext.jsx";
import {ReservationProvider} from "./context/ReservationContext.jsx";
import {CarProvider} from "./context/CarContext.jsx";
import MyBookings from "./pages/MyBookings.jsx";

function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/my-bookings",
                    element: <MyBookings />
                },
                {
                    path: "/clients",
                    element: <Clients />
                },
                {
                    path: "/reservations",
                    element: <Reservations />
                },
                {
                    path: "/add-car",
                    element: <CarAction />
                },
                {
                    path: "/edit-car/:id",
                    element: <CarAction />
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

    axios.defaults.baseURL = "http://localhost:3000/api";
    axios.defaults.withCredentials = true;

  return (
    <div className="h-full">
        <UserProvider>
            <ReservationProvider>
                <CarProvider>
                    <ModalProvider>
                        <RouterProvider router={router} />
                    </ModalProvider>
                </CarProvider>
            </ReservationProvider>
        </UserProvider>
    </div>
  )
}

export default App
