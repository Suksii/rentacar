import './App.css'
import Registration from "./pages/Registration.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import AddVehicleContent from "./content/AddVehicleContent.jsx";
import AdminBoard from "./pages/AdminBoard.jsx";
import cardCar from "./assets/card-car.jpg";

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
            children: [
                {
                    path: "/",
                    element: <Home data={data}/>
                },
                {
                    path: "/admin-board",
                    element: <AdminBoard data={data} header={header} />
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
            path: "/add-vehicle",
            element: <AddVehicleContent />
        }

    ])

  return (
    <div className="h-full">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
