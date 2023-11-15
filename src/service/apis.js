import axios from 'axios';


const apiInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
})


export const getProducts = async (machineId) => {
    try{
        return await apiInstance.get(`/machine/${machineId}/products`);
    }
    catch (error){
        console.log(error);
    }
}

export const getStatus = async (machineId) => {
    try{
        const response = await apiInstance.get('/machine/status', {data: {id: machineId}});
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getEarnings = async (machineId) => {
    try{
        const response = await apiInstance.get(`/machine/${machineId}/earnings`);
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getCredit = async (machineId) => {
    try{
        const response = await apiInstance.get(`/machine/${machineId}/credit`);
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}

export const getMachines = async () => {
    try{
        return await apiInstance.get('/machine');
    }
    catch (error){
        console.log(error)
    }

}


export const getStats = async (machineId) => {
    try{
        const response = await apiInstance.get(`/machine/${machineId}/stats`);
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}




