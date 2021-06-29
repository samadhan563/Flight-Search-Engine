import React, { useState } from 'react';
import "./FlightSearchEngine.css";
function FlightSideBar() {
    const [serach, setSearch] = useState({
        originName: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        passanger: "",
        country: "",
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


    const onSearch = (event) => {
        alert("Data submited... 😄")
        console.log(JSON.stringify(serach))
    }
    return (
        <div className="card">
            <input type="text"
                className="input mt-2 ml-2 mr-2"
                name="originName"
                value={serach.originName}
                placeholder="Enter City Origin"
                onChange={onChange} />
            <input type="text" className="input mt-2 ml-2 mr-2"
                name="destination"
                value={serach.destination}
                placeholder="Enter destination City"
                onChange={onChange} />
            <input type="date"
                className="input mt-2 ml-2 mr-2"
                name="departureDate"
                value={serach.departureDate}
                placeholder="Departure date"
                onChange={onChange} />
            {/* <select type="text" id="country"
                className="input mt-2 ml-2 mr-2" name="country" onChange={onChange}>
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
            </select> */}
            <input type="date" className="input mt-2 ml-2 mr-2" name="returnDate" value={serach.returnDate} placeholder="Return Date" onChange={onChange} />
            <input type="number" className="input mt-2 ml-2 mr-2" name="passanger" value={serach.passanger} placeholder="Passanger" onChange={onChange} />
            <button className="btn outline info block mt-2 ml-2 mr-3 mb-2" onClick={onSearch}>Search</button>
        </div>
    )
}

export default FlightSideBar

