import axios from 'axios';


const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
})


export const getProducts = async (machineId) => {
    try{
        const response = await apiInstance.get('/products', {data: {machineId: machineId}});
        return response.data;
    }
    catch (error){
        console.log(error);
    }
}

export const getStatus = async (machineId) => {
    try{
        const response = await apiInstance.get('/status', {data: {machineId: machineId}});
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getEarnings = async (machineId) => {
    try{
        const response = await apiInstance.get('/earnings', {data: {machineId: machineId}});
        return response.data;
    }
    catch (error){
        console.log(error)
    }

}

export const getCredit = async (machineId) => {
    try{
        const response = await apiInstance.get('/credit', {data: {machineId: machineId}});
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getMachines = async () => {
    try{
        const response = await apiInstance.get('/machines');
        return response.data
    }
    catch (error){
        console.log(error)
    }

}




