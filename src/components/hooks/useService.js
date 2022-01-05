import { useEffect, useState } from "react"

const useService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Khairul-Basar/uniclinic-fake-data/main/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return [
        services
    ]
    
    
}

export default useService