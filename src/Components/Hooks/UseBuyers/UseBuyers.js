import { useEffect, useState } from "react"

const useBuyers = email =>{
    const [isBuyers,setIsBuyers]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/users/Buyers/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsBuyers(data.isBuyers)
            })
        }

    },[email])
    return [isBuyers]
}
export default useBuyers;