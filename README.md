# Rent a Car Project

## About

This project is a full-stack rent-a-car application built with React for the frontend and Express, Node.js, and MongoDB for the backend.</br>
The application allows users to:
- Register and log in
- Browse available cars
- View car details
- Make reservations
- View their reservations
- Search through their reservations

Administrators can:
- Edit and delete cars
- Add new cars
- View car details
- Approve users' reservations
- View all clients and reservations
- Search through clients and reservations

## Features

- **User Authentication**: Register, login, logout, and profile management.
- **Car Management**: View all cars, add new cars, update car details, delete cars, and upload car images.
- **Reservation Management**: Make reservations, view client-specific reservations, and view all reservations.
- **Responsive Design**: Optimized for various screen sizes using TailwindCSS.

## Pages

### Register and Login Pages

| ![rentacar-admin-registration](https://github.com/user-attachments/assets/4a594f4d-fcac-4c7a-8f83-d71251c147ce) | ![rentacar-admin-login](https://github.com/user-attachments/assets/3c82dc3f-632c-491a-b7ba-833ca7daa0b8) |
|:---:|:---:|
| Register Page | Login Page |

## Admin

## Home Page Admin

![Admin HomePage](https://github.com/user-attachments/assets/00ecb2a6-c885-4694-9fb6-f3ba0194a828)

### Car Actions

| ![rentacar-admin-add_car](https://github.com/user-attachments/assets/33c9baf4-a9a2-4ddb-b590-7d9c90c8f560) | ![rentacar-admin-edit_car](https://github.com/user-attachments/assets/57c69989-df69-472f-ad31-83805a55c04e) |
|:---:|:---:|
| Add Car Page | Edit Car Page |

| ![rentacar-admin-clients](https://github.com/user-attachments/assets/d794691f-42cf-4a7a-9455-462668047450) | ![rentacar-admin-reservations](https://github.com/user-attachments/assets/c6591747-bafa-40e0-9c97-11e3002e7c8d) |
|:---:|:---:|
| Clients Page | Reservations Page |

### Backend

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: Library for hashing passwords.
- **Multer**: Middleware for handling file uploads.
- **Other Libraries**: `cookie-parser`, `cors`, `dotenv`, `fs`, `nodemon`.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client.
- **React Router**: Declarative routing for React.
- **React Hook Form**: Form handling.
- **Yup**: Schema validation.
- **Date-fns**: Date utility library.
- **React Icons**: Icon library.
- **TailwindCSS**: Utility-first CSS framework.
- **React Hot Toast**: Notifications.

## API Endpoints

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `POST /api/users/logout` - Logout a user
- `GET /api/users/profile` - Get user profile
- `GET /api/users` - Get all users (admin)

### Car Routes

- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get a specific car
- `POST /api/cars/add` - Add a new car
- `POST /api/cars/upload` - Upload car image
- `PUT /api/cars/update/:id` - Update car details
- `DELETE /api/cars/delete/:id` - Delete a car

### Reservation Routes

- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/client-reservations` - Get client-specific reservations
- `POST /api/reservations/add/:id` - Add a new reservation
