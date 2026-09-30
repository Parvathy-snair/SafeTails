import axiosInstance from "./axiosInstance";

const apiService=async(httpMethod,url,reqBody)=>{
    const reqconfig={
        method:httpMethod,
        url,
        data:reqBody
    }
    try{
        const responce=await axiosInstance(reqconfig)
        return responce
        }catch(err){
            throw err
        }
}
export default apiService
