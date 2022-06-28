

import axios from 'axios'

class CarService {

    constructor() {
        this.httpClient = axios.create({
            baseURL: 'http://localhost:3000'
        })
    }

    async getAll() {
        try {
            const { data } = await this.httpClient.get('/api/cars')

            return data;
        } catch (error) {
            return []
        }
    }


    async addCar(brand, model, year, maxSpeed, numberOfDoors, isAutomatic, engine) {
        try {
            const { data } = await this.httpClient.post(
                'api/cars',
                {
                    brand: brand,
                    model: model,
                    year: year,
                    maxSpeed: maxSpeed,
                    numberOfDoors: numberOfDoors,
                    isAutomatic: isAutomatic,
                    engine: engine
                })

            return data;
        } catch (error) {
            return []
        }
    }

}

export default new CarService()