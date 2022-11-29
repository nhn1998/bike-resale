import { useEffect, useState } from "react"

const useAdmin = email =>{
    const [isAdmin,setIsAdmin]=useState(false)
    useEffect(()=>{
        if(email){
            fetch(`https://assaingment-twelve-server-nhn1998.vercel.app/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsAdmin(data.isAdmin)
            })
        }

    },[email])
    return [isAdmin]
}
export default useAdmin