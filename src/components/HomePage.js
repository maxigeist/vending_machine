import { useState, useEffect } from 'react';
import { getCredit, getEarnings, getProducts, getStatus, getMachines } from '../service/apis';
import MachineStatus from './MachineStatus';

function HomePage() {

  const getMachine = (machineId) => {
    return {
      machineId: machineId,
      products: getProducts(machineId),
      status: getStatus(machineId),
      earnings: getEarnings(machineId),
      credit: getCredit(machineId)
    }
  }
  
  const [machines, setMachines] = useState([1, 2, 3, ,4, 5, 6]);
  
  useEffect(() => {
    // getMachines().then((response) => setMachines(response))
}, []);

  
  getMachines();
  const [currentMachine, setCurrentMachine] = useState();

  const handleCurrentMachine = (machineId) => setCurrentMachine(getMachine(machineId));

  return (
    <div>
      <div>
        {machines?.map((machine) => (
        <button>
          {machine}
        </button>
        ))}
      </div>
      <MachineStatus machine={currentMachine}/>
    </div>
  );
}

export default HomePage;
