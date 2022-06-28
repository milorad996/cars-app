import { useEffect, useState } from "react"
import CarService from "../services/CarService"
import { BrowserRouter as navigate, Redirect } from 'react-router-dom';



function AddCar() {



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


    const [newCar, setNewCar] = useState({
        brand: '',
        model: '',
        year: '',
        maxSpeed: '',
        numberOfDoors: '',
        isAutomatic: '',
        engine: ''
    })
    const addNewCar = (e) => {
        e.preventDefault();

        const newC = CarService.addCar(newCar.brand, newCar.model, newCar.year, newCar.maxSpeed, newCar.numberOfDoors, newCar.isAutomatic, newCar.engine);

        setCars([...cars, newC])



    }

    return (
        <div>


            <form onSubmit={addNewCar} style={{ display: 'flex', flexDirection: 'column', width: 200, marginLeft: 15 }}>
                <input type="text" value={newCar.brand} placeholder="Brand" onChange={({ target }) => setNewCar({ ...newCar, brand: target.value })} />
                <input type="text" value={newCar.model} placeholder="Model" onChange={({ target }) => setNewCar({ ...newCar, model: target.value })} />
                <label for="cars">Choose a year:</label>
                <select style={{ width: 200 }} onChange={({ target }) => setNewCar({ ...newCar, year: target.value })} value={newCar.year}>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                </select>
                <input type="number" value={newCar.maxSpeed} placeholder="Max speed" onChange={({ target }) => setNewCar({ ...newCar, maxSpeed: target.value })} />
                <input type="number" value={newCar.numberOfDoors} placeholder="Number of doors" onChange={({ target }) => setNewCar({ ...newCar, numberOfDoors: target.value })} />
                <input type="checkbox" id="vehicle1" name="vehicle1" value='Automatic' onChange={({ target }) => setNewCar({ ...newCar, isAutomatic: target.value })} />
                <label for="vehicle1">Automatic</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value='Manual' onChange={({ target }) => setNewCar({ ...newCar, isAutomatic: target.value })} />
                <label for="vehicle2">Manual</label>
                <p>Please select your favorite engine:</p>
                <input type="radio" id="diesel" name="diesel" value="diesel" onChange={({ target }) => setNewCar({ ...newCar, engine: target.value })} />
                <label for="diesel">Diesel</label>
                <input type="radio" id="petrol" name="petrol" value="petrol" onChange={({ target }) => setNewCar({ ...newCar, engine: target.value })} />
                <label for="petrol">Petrol</label>
                <input type="radio" id="electric" name="electric" value="electric" onChange={({ target }) => setNewCar({ ...newCar, engine: target.value })} />
                <label for="electric">Electric</label>
                <input type="radio" id="hybrid" name="hybrid" value="hybrid" onChange={({ target }) => setNewCar({ ...newCar, engine: target.value })} />
                <label for="hybrid">Hybrid</label>
                <button>Add car</button>

            </form>
        </div>
    )

}

export default AddCar;