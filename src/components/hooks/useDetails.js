import { useEffect, useState } from "react"

const useDetails = (details,id) => {
    const [info,setInfo] = useState({})
    useEffect(()=> {
        const detailsInfo = details.find(dtls => dtls?.id == id)
        setInfo(detailsInfo)
    },[details])

    return {
        info
    }
}

export default useDetails