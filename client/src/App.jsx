import './App.css'
import Registration from "./pages/Registration.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import AddCar from "./pages/AddCar.jsx";
import AdminBoard from "./pages/AdminBoard.jsx";
import cardCar from "./assets/card-car.jpg";
import Contact from "./pages/Contact.jsx";
import Clients from "./pages/Clients.jsx";
import Reservations from "./pages/Reservations.jsx";
import {ModalProvider} from "./context/ModalContext.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import axios from "axios";
import {UserProvider} from "./context/UserContext.jsx";
import ReservationContent from "./content/ReservationContent.jsx";
import {ReservationProvider} from "./context/ReservationContext.jsx";
import {CarProvider} from "./context/CarContext.jsx";

function App() {

    const header = [
        { title: "Car Model", index: "carModel" },
        { title: "Image", index: "image", render: (row) => <img src={row.image} alt={row.carModel} className="w-[150px] object-cover" /> },
        { title: "Rating", index: "rating" },
        { title: "Price", index: "price" },
        { title: "Seats", index: "seats" },
        { title: "Gear", index: "gear" },
        { title: "Fuel", index: "fuel" },
        { title: "Type", index: "type" },
        { title: "Year", index: "year" }
    ];

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
                    path: "/admin-board",
                    element: <AdminBoard header={header} />
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
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/add-car",
                    element: <AddCar />
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
