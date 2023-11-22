import { useState, useEffect } from 'react';
import {getProducts, getMachines, getStats} from '../service/apis';
import MachineStatus from './MachineStatus';
import styles from '../styles/HomePage.module.css'
import Statistics from './Stadistics';
import Loader from "../components/Loader";
import loader from "../components/Loader";

function HomePage() {

    const [currentMachine, setCurrentMachine] = useState();
    const [statistics, setStatistics] = useState(false);//this is for the buttons.
    const [machines, setMachines] = useState()
    const [refresh, setRefresh] = useState(false)
    const [loading, setLoading] = useState(false);


    const fetchMachines = async () => {
        try{
            const response = await getMachines();
            setMachines(response.data);
            await handleCurrentMachine(response.data[currentMachine.key]._id, response.data[currentMachine.key].credit, response.data[currentMachine.key].status, currentMachine.key)
        }
        catch (error){
            console.log(error)
        }
        finally {
          setRefresh(!refresh)
        }
    }

    const handleCurrentMachine = async (machineId, credit, status, key) => {
        setLoading(true);
        const productsResponse = await getProducts(machineId);
        const machineEarnings = await getStats(machineId)
        setCurrentMachine({
                machineId: machineId,
                products: productsResponse.data.products,
                status: status,
                earnings: machineEarnings.totalEarnings,
                credit: credit,
                key : key
            }
        )
        // setLoading(false)
    }


    useEffect(() => {
        fetchMachines();
        // setCurrentMachine(machines[0])
        // getMachines().then((response) => setMachines(response))
    }, []);


  return (
    <div className={styles.HomeWrapper}>
        <Loader open={loading} />
      <div className={styles.MachineSelector}>
        <h1 className={styles.SelectorTitle}>Seleccionar máquina por ID</h1>
        {machines?.map((machine, key) => (
        <button className={`${currentMachine?.machineId === machine?._id && !statistics ? styles.idButtonSelected : ''} ${styles.idButton}`} onClick={()=> {handleCurrentMachine(machine._id, machine.credit, machine.status, key)}}>
          {key + 1}
        </button>
        ))}
        {/* <h1 className={styles.SelectorTitle}>Estadísticas</h1>
        <button className={`${statistics ? styles.idButtonSelected : ''} ${styles.idButton}`} onClick={()=> setStatistics(true)}>📊</button> */}
      </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%"}}>
      {statistics ?
          <div style={{display: 'flex', flexDirection: 'column'}}><h1>Estas son las estadísticas</h1><Statistics></Statistics></div>
          :
          ( currentMachine ?
          <MachineStatus machine={currentMachine} refresh={fetchMachines} refreshVar={refresh} loader={setLoading}/> : <h1>Elija una máquina</h1>
          )
      }
        </div>

    </div>
  );
}

export default HomePage;
