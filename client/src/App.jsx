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

    const data = [
        {
            id: 1,
            image: cardCar,
            carModel: "mercedes-benz",
            carName: "C-200",
            rating: 4.5,
            price: 200,
            seats: 4,
            gear: "automatic",
            fuel: "diesel",
            type: "suv",
            year: 2021
        },
        {
            id: 2,
            image: cardCar,
            carModel: "audi",
            carName: "A4",
            rating: 4.2,
            price: 150,
            seats: 4,
            gear: "automatic",
            fuel: "diesel",
            type: "suv",
            year: 2020
        },
        {
            id: 3,
            image: cardCar,
            carModel: "bmw",
            carName: "X5",
            rating: 4.7,
            price: 250,
            seats: 4,
            gear: "automatic",
            fuel: "diesel",
            type: "suv",
            year: 2022
        },
        {
            id: 4,
            image: cardCar,
            carModel: "volkswagen",
            carName: "Tiguan",
            rating: 4.0,
            price: 100,
            seats: 4,
            gear: "automatic",
            fuel: "diesel",
            type: "suv",
            year: 2019
        },
        {
            id: 5,
            image: cardCar,
            carModel: "tesla",
            carName: "Model S",
            rating: 4.9,
            price: 300,
            seats: 4,
            gear: "automatic",
            fuel: "electric",
            type: "limousine",
            year: 2023
        },
        {
            id: 6,
            image: cardCar,
            carModel: "toyota",
            carName: "Corolla",
            rating: 4.3,
            price: 120,
            seats: 4,
            gear: "manual",
            fuel: "diesel",
            type: "suv",
            year: 2018
        }
    ];

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home data={data}/>
                },
                {
                    path: "/admin-board",
                    element: <AdminBoard data={data} header={header} />
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
        },
        {
            path: "/add-car",
            element: <AddCar />
        }
    ])

    axios.defaults.baseURL = "http://localhost:3000/api";
    axios.defaults.withCredentials = true;

  return (
    <div className="h-full">
        <ModalProvider>
            <RouterProvider router={router} />
        </ModalProvider>
    </div>
  )
}

export default App
