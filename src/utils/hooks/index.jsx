import { useEffect, useState } from "react";
  

export function useFetch(url){

    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        if(!url) return
        setLoading(true);
        
        async function fetchata(){
           
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (erreur) {
                //console.log('=== error ===', erreur);
                setError(true);
            } finally {
                setLoading(false);  
            }
        }

        fetchata();

    }, [url]);

    return { isLoading, data, error};

}
