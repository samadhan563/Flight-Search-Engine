import axios from 'axios';
class FlightSearchService {
    getAllFlights() {
        return axios.get("/data/flights.json");
    }
}
export default new FlightSearchService();
