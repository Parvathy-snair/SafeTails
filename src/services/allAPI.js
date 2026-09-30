import apiService from "../api/apiServices";

// register
export const registerAPI = async (userData) => {
    return await apiService("POST", "/users", userData);
};

//login
export const loginAPI = async (email, password) => {
  return await apiService("GET", `/users?email=${email}&password=${password}`);
};

// rescue
export const rescueAPI = async (rescueData) => {
  return await apiService("POST", "/rescueRequests", rescueData);
};

export const getRescueAPI = async () => {
  return await apiService("GET", "/rescueRequests");
};

// reprt
export const reportAPI=async(reportData)=>{
    return await apiService("POST","/reports",reportData);
};

export const getReportsAPI=async()=>{
    return await apiService("GET","/reports");
};


// adoption
export const adoptionAPI=async(adoptionData)=>{
  return await apiService("POST","/adoptionRequests",adoptionData);
};
export const getAdoptionAPI=async()=>{
  return await apiService("GET","/adoptionRequests");
};

// admin

export const adminLoginAPI=async(email,password)=>{
  return await apiService("GET",`/admins?email=${email}&password=${password}`);
};

export const getUsersAPI=async()=>{
return await apiService("GET","/users");
};



