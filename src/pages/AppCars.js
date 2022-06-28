import React, { useEffect, useState } from "react";
import CarService from "../services/CarService";
import axios from 'axios';
function AppCars() {


    const [cars, setCars] = useState([])

    useEffect(() => {
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


            <ul>
                {cars.map((car) => <li key={car.id} style={{ border: '1px solid black', marginBottom: '5px', padding: 5, display: 'flex', flexDirection: 'column' }}>
                    <span>Brand: {car.brand}</span>
                    <span>Model: {car.model}</span>
                    <span>Year: {car.year}</span>
                    <span>Max speed: {car.maxSpeed}</span>
                    <span>Number of doors: {car.numberOfDoors}</span>
                    <span>Automatic or manual: {car.isAutomatic}</span>
                    <span>Engine: {car.engine}</span>
                </li>)}
            </ul>
        </div>
    )
}

export default AppCars;