import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(url) {

    let [data, setData] = useState([]);
    
    let [ error, setError ] = useState( "" )
    
    let [isLoading, setIsLoading] = useState( true )


    useEffect( () => {
        let fetchApi = async(  ) => {
            try{
                // Fetch Method
                // let response = await fetch(url)

                // if ( response.ok ) {
                //     let datas = await response.json()
                //     setData( datas )
                // }
                // else{
                //     throw new Error ( "Data Not Found" )
                // }

                // Axios Method
                let response = await axios.get(url)
                setData( response.data )
            }
            catch( error ){
                setError( error.message )
            }
            finally{
                setIsLoading( false )
            }
        }
        fetchApi()
    }, [] )

    return { data, error, isLoading,setData }
}

export default useFetch;