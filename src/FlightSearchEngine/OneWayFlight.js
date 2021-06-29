import React, { useState } from 'react';
import "./FlightSearchEngine.css";
function OneWayFlight() {
    const [submit, setSubmit] = useState(true)
    const [search, setSearch] = useState({
        originName: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        passanger: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target
        setSearch((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        })
    }


    const onSearch = async (event) => {
        const searchCriteria = {
            departureAirport: search.originName,
            arrivalAirport: search.destination,
            departureDate: search.departureDate, // string: 'YYYY-MM-DD'
            returnDate: search.returnDate,  // string: 'YYYY-MM-DD'
            maxOfferCount: 10,
            key: '<api-key>',
        };
        alert("Data sumbmited... 😄")
        setSearch()
    }
    return (
        <div >
            <input type="text"
                className="input mt-2 ml-2 mr-2"
                name="originName"
                value={search.originName}
                placeholder="Enter City Origin"
                onChange={onChange} />
            <input
                type="text"
                className="input mt-2 ml-2 mr-2"
                name="destination"
                value={search.destination}
                placeholder="Enter destination City"
                onChange={onChange} />
            <input
                type="date"
                className="input mt-2 ml-2 mr-2"
                name="departureDate"
                value={search.departureDate}
                placeholder="Departure date"
                onChange={onChange} />
            <input type="number"
                className="input mt-2 ml-2 mr-2"
                name="passanger"
                value={search.passanger}
                placeholder="Passanger"
                onChange={onChange} />
            <button className="btn outline info block mb-2 mt-2 ml-2" onClick={onSearch}>Search</button>
        </div>
    )
}

export default OneWayFlight

