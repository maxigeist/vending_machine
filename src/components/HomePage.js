import { useState, useEffect } from 'react';
import {getCredit, getEarnings, getProducts, getStatus, getMachines, getStats} from '../service/apis';
import MachineStatus from './MachineStatus';
import styles from '../styles/HomePage.module.css'

function HomePage() {

    const [currentMachine, setCurrentMachine] = useState();
    const [statistics, setStatistics] = useState(false);//this is for the buttons.
    const [machines, setMachines] = useState()


    const fetchMachines = async () => {
        try{
            const response = await getMachines();
            setMachines(response.data);
        }
        catch (error){
            console.log(error)
        }
    }


    const handleCurrentMachine = async (machineId, credit, status) => {
        const productsResponse = await getProducts(machineId);
        const machineEarnings = await getStats(machineId)
        // const status = await getStatus(machineId);
        // const earnings = await getEarnings(machineId);
        setCurrentMachine({
                machineId: machineId,
                products: productsResponse.data.products,
                status: status,
                earnings: machineEarnings.totalEarnings,
                credit: credit
            }
        );
    }


    useEffect(() => {
        fetchMachines();
        // setCurrentMachine(machines[0])
        // getMachines().then((response) => setMachines(response))
    }, []);



  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.MachineSelector}>
        <h1 className={styles.SelectorTitle}>Seleccionar máquina por ID</h1>
        {machines?.map((machine, key) => (
        <button className={`${currentMachine?.machineId === machine?._id && !statistics ? styles.idButtonSelected : ''} ${styles.idButton}`} onClick={()=> {handleCurrentMachine(machine._id, machine.credit, machine.status); setStatistics(false)}}>
          {key + 1}
        </button>
        ))}
        <h1 className={styles.SelectorTitle}>Estadísticas</h1>
        <button className={`${statistics ? styles.idButtonSelected : ''} ${styles.idButton}`} onClick={()=> setStatistics(true)}>📊</button>
      </div>
        <div>
      {statistics ?
          <h1>Estas son las estadísticas</h1>
          :
          ( currentMachine ?
          <MachineStatus machine={currentMachine}/> : <h1 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Elija una máquina</h1>
          )
      }
        </div>

    </div>
  );
}

export default HomePage;
