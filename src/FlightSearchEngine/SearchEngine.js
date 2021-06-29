import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./FlightSearchEngine.css";
import InputRange from "react-input-range";

import AvailableFlights from './AvailableFlights'
import flightData from "../data";
import "react-input-range/lib/css/index.css"

function FlightSearchEngine() {
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [passengerCount, setPassengerCount] = useState(1);
    const [priceRange, setPriceRange] = useState(10000);
    const [bookReturn, setBookReturn] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [returnFilterData, setReturnFilterData] = useState([]);


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

    const handleCount = (key) => {
        if (key === "add") {
            if (passengerCount >= 5) {
                return;
            }
            setPassengerCount(passengerCount + 1);
        } else if (key === "less") {
            if (passengerCount === 1) {
                return;
            }
            setPassengerCount(passengerCount - 1);
        }
    };

    const onSearch = (event) => {
        if (serach.bookReturn && !serach.returnDate) {
            alert("Return date can't be empty!");
        } else if (!serach.originName) {
            alert("Origin city can't be empty!");
        } else if (!serach.destination) {
            alert("Destination city can't be empty!");
        } else if (!serach.departureDate) {
            alert("Departure date can't be empty!");
        }
        if (serach.originCity && serach.destinationCity && serach.departureDate) {
            setIsSearchClicked(true);
            handleFilter();
            if (bookReturn && serach.returnDate) {
                returnFilter();
            }
        }
        setIsSearchClicked(true);
    }

    const changeOneWay = () => {
        setIsSearchClicked(false);
        setBookReturn(false);
        setSearch((preValue) => { return { ...preValue, ['returnDate']: "" } })
    }
    const changeReturn = () => {
        setIsSearchClicked(false);
        setBookReturn(true);
    }

    const handleFocus = (e) => {
        e.currentTarget.type = "date";
    };
    const handleBlur = (e) => {
        e.currentTarget.type = "text";
    };


    const handleFilter = () => {
        let result = flightData.filter((data) => {
            if (
                data &&
                data.from.city &&
                data.to.city &&
                data.from.city
                    .toLowerCase()
                    .includes(serach.originName.trim().toLowerCase()) &&
                data.to.city
                    .toLowerCase()
                    .includes(serach.destination.trim().toLowerCase()) &&
                data.depart === serach.departureDate &&
                data.price <= priceRange
            ) {
                return data;
            }
        });
        setFilteredData(result);
    };

    //for filtering the data of return flights
    const returnFilter = () => {
        let result = flightData.filter((data) => {
            if (
                data &&
                data.from &&
                data.from.city &&
                data.from.city
                    .toLowerCase()
                    .includes(serach.destination.trim().toLowerCase()) &&
                data.to &&
                data.to.city &&
                data.to.city.toLowerCase().includes(serach.originName.trim().toLowerCase()) &&
                data.depart === serach.departureDate &&
                data.price <= priceRange
            ) {
                return data;
            }
        });
        setReturnFilterData(result);
    };

    useEffect(() => {
        handleFilter();
        returnFilter();
    }, [priceRange]);

    return (
        <div>
            <div className="row  mt-4 ml-2 mr-2 ">
                <div className=" col-md-4 ">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="card ">
                                <div className="card-body m-1">
                                    <div className="row ">
                                        <ul className="nav-item">
                                            <li><Link className="nav-link ml-1 mr-0" onClick={changeOneWay}>One Way</Link></li>
                                            <li><Link className="nav-link "  onClick={changeReturn}>Return</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="row ">
                                        <input type="text"
                                            className="input mt-2 "
                                            name="originName"
                                            value={serach.originName}
                                            placeholder="Enter City Origin"
                                            onChange={onChange} />
                                        <input type="text" className="input mt-2 "
                                            name="destination"
                                            value={serach.destination}
                                            placeholder="Enter destination City"
                                            onChange={onChange} />
                                        <input type="text"
                                            className="input mt-2 "
                                            name="departureDate"
                                            value={serach.departureDate}
                                            placeholder="Departure date"
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            onChange={onChange} />

                                        {bookReturn && <input type="text"
                                            className="input mt-2 "
                                            name="returnDate"
                                            value={serach.returnDate}
                                            placeholder="Enter return date"
                                            onFocus={handleFocus}
                                            onBlur={handleBlur}
                                            onChange={onChange} />
                                        }
                                        <div
                                            className="d-flex justify-content-center mt-2 block"
                                            style={{ alignItems: "center" }}
                                        >
                                            <button type="button" className="btn btn-secondary  mr-2" onClick={() => handleCount("less")} >
                                                -
                                            </button>
                                            <div className="text-muted">  {passengerCount} passengers
                                            </div>
                                            <button type="button"  className="btn btn-secondary ml-2"
                                                onClick={() => handleCount("add")} >
                                                +
                                            </button>
                                        </div>
                                        <button className="btn outline btn-info block ml-2 mt-2 " onClick={onSearch}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card m-4 ">
                            <div className="card-body">
                                <div className="ml-2"
                                    style={{
                                        marginBottom: ".7rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Refine flight search
                                </div>
                                <div className="mb-4 mt-4 mr-4 ml-2">
                                    <InputRange
                                        minValue={0}
                                        step={100}
                                        maxValue={10000}
                                        formatLabel={(price) => `${price}`}
                                        value={priceRange}
                                        onChange={(price) => setPriceRange(price)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mb-4">
                    <AvailableFlights
                        filteredData={filteredData}
                        bookReturn={bookReturn}
                        isSearchClicked={isSearchClicked}
                        returnFilterData={returnFilterData}
                        passengerCount={passengerCount}
                    />
                </div>
            </div>
        </div>


    )
}


export default FlightSearchEngine
/*
https://github.com/smishra11/Fight_Search
*/