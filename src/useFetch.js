import { useState , useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

            const abortCount = new AbortController();



        setTimeout(() => {
            fetch(url, { signal : AbortController.signal})        
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch im really sorryyyy');                
            }
            return res.json(                
            );            
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError')
            console.log('fetch aborted');
            setError(err.message);
            setIsPending(false);
        })
        });

        return () => abortCount.abort();
    },[url]);

    return { data, isPending, error}

}

export default useFetch;