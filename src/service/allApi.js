import BASE_URL from "./baseUrl";
import { commonRequest } from "./commonReq";


//register
export const registerEmpl=async(body,headers)=>{
    return await commonRequest("POST",`${BASE_URL}/employees/register`,body,headers)
}

// get employees
export const getEmployees= async(searchData)=>{
    return await commonRequest("GET",`${BASE_URL}/employees/getEmployees?search=${searchData}`,"")
}

// get a single employee
export const getProfile= async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/employees/getProfile/${id}`,"")
}

// to delete employee
export const deleteEmployee= async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/employees/deleteEmployee/${id}`,{})
}

// edit employees
export const editEmpl= async(id, body, header)=>{
    return await commonRequest("POST",`${BASE_URL}/employees/editProfile/${id}`,body,header)
}

