import axios from "axios";
import { useEffect, useState } from "react";
export const useAxios = ( cityName, search, setSearch ) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (search) {
            setLoading(true);

            axios
                .get(
                    `https://restcountries.com/v3.1/name/${cityName}?fullText=true`
                )
                .then((res) => {
                    setData(res.data[0]);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setSearch(false);
                    setLoading(false);
                });
        }
    }, [cityName, search, setSearch]);

    return [ data , loading, error];
};
