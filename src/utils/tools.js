import { pathName } from "./URL";

export const set_token_fromServer = async (data) =>{
    console.log(data, "from tools");
    try {
        const response = await fetch(`${pathName}/auth`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const response_data = await response.json();
        if(response_data.status){
            const token = response_data.token;
            localStorage.setItem('token', token)
            return true
        }else{
            
            return false
        }
    } catch (error) {
        console.log(error);
    }
}


export const send_token = () =>{
    const token = localStorage.getItem("token");
    return {
        authorization: `bearer ${token}`
    }
}