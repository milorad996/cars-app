

import axios from 'axios'

class CarService {
    constructor() {
        this.httpClient = axios.get('http://localhost:3000/explorer');

    }

    async getAll() {
        try {
            const { data } = await this.httpClient.get('/api/cars')

            return data;
        } catch (error) {
            return []
        }
    }
}

export default new CarService()