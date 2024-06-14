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
        "content-type":"application/json",
        authorization: `bearer ${token}`
    }
}



export const insert_user = async  (user) =>{
            try {
                const response =await  fetch(`${pathName}/user`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(user)
                })

                const result = await  response.json();
                return result
            } catch (error) {
                console.log({error});
            }
}


export const insert_course = async(course) =>{
    try {
        const response = await fetch(`${pathName}/course`,{
            method:"POST",
            headers:send_token(),
            body:JSON.stringify(course)
        })

        const result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}


export const update_course = async (id,data) =>{

    try {
        const res = await fetch(`${pathName}/author-course/${id}`,{
            method:"PATCH",
            headers:send_token(),
            body:JSON.stringify(data)
        })
        const result  = await res.json();
        return result
    } catch (error) {
        console.log(error);
    }
}


