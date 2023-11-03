import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-au54u4yxk-riyaz-ahmeds-projects.vercel.app',
    withCredentials:true 
})
const useAxiosSecure = () => {
    const {logOut} =useContext(AuthContext)
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        },error=>{
            console.log('error in interceptor', error.response)
            if(error.response.status === 401 || error.response.status === 403){
                logOut()
                .then()
                .catch()
            }
        })
    },[logOut])
    return axiosSecure
};

export default useAxiosSecure;