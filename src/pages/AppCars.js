import React, { useState } from "react";
import CarService from "../services/CarService";
import axios from 'axios';
function AppCars() {


    const [cars, setCars] = useState([])

    async function getData() {
        try {
            const cars = await CarService.getAll()

            //setPosts(cars)
            console.log(cars)
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div className="App">
            <h1>AppCars</h1>


            <ol>
                {cars.map((car) => <li key={car.id}>{car.brand}</li>)}
            </ol>
            <button onClick={getData}>Dovuci podatke</button>
        </div>
    )
}

export default AppCars;