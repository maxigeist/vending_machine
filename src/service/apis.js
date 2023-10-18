import axios from 'axios';


const apiInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
})


export const getProducts = async () => {
    try{
        const response = await apiInstance.get('/products');
        return response.data;
    }
    catch (error){
        console.log(error);
    }
}

export const getStatus = async () => {
    try{
        const response = await apiInstance.get('/status');
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getEarnings = async () => {
    try{
        const response = await apiInstance.get('/earnings');
        return response.data;
    }
    catch (error){
        console.log(error)
    }

}

export const getCredit = async () => {
    try{
        const response = await apiInstance.get('/credit');
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getMachines = async () => {
    try{
        const response = await apiInstance.get('/machines');
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}




