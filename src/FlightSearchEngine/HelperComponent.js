
import SearchEngine from './SearchEngine'

export const handleFilter = (flightData,serach) => {
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
            data.price <= SearchEngine.priceRange
        ) {
            return data;
        }
    });
    return result;
};

