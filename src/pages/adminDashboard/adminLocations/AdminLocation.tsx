import { useEffect } from "react"
import { UseFetchLocationQuery } from "../../../api/locationSlice"

const AdminLocation = () => {
    const {data, isSuccess} = UseFetchLocationQuery({detailed:false})
    useEffect(()=>{
        if(data?.results && isSuccess){
            console.log(data.results)
        }
    },[data,isSuccess])
    return (
        <div>
            
        </div>
    )
}

export default AdminLocation
