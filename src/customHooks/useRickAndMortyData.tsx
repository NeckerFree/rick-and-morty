import { useEffect, useState } from "react";
import type { DataResponse } from "../types/types";
export function useRickAndMortyData(endpoint: string, page = 1)
{
    const [data, setData] = useState<DataResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(page);
    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                setLoading(true);
                const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}?page=${currentPage}`);
                const json: DataResponse = await response.json();
                setData(json);
            }
            catch (err)
            {
                if (err instanceof Error)
                {
                    setError(err.message);
                }
                else
                {
                    console.log('Unknown error', err);
                }
            }
            finally
            {
                setLoading(false);
            }
        };
        fetchData();
    }, [endpoint, currentPage]);

    return {
        data,
        loading,
        error,
        currentPage,
        setCurrentPage,
        totalPages: data?.info?.pages ?? 1
    };
}

