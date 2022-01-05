import { useEffect, useState } from "react"

const useDoctor = () => {
    const [doctor,setDoctor] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Khairul-Basar/uniclinic-fake-data/main/doctors.json')
        .then(res=>res.json())
        .then(data => setDoctor(data))
    },[])

    return {
        doctor
    }

}

export default useDoctor