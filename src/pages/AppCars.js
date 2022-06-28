import React, { useEffect, useState } from "react";
import CarService from "../services/CarService";
import axios from 'axios';
function AppCars() {


    const [cars, setCars] = useState([])

    const getCars = useEffect(() => {
        async function getCars() {

            try {
                const cars = await CarService.getAll()

                setCars(cars)
            } catch (error) {
                console.log(error)
            }
        }

        getCars()
    }, [])
    return (

        <div className="App">
            <h1>AppCars</h1>


            <ol>
                {cars.map((car) => <li key={car.id}>{car.brand}</li>)}
            </ol>
            <button onClick={getCars}>Dovuci podatke</button>
        </div>
    )
}

export default AppCars;