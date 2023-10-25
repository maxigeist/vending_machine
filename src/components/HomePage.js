import { useState, useEffect } from 'react';
import { getCredit, getEarnings, getProducts, getStatus, getMachines } from '../service/apis';
import MachineStatus from './MachineStatus';
import styles from '../styles/HomePage.module.css'

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
  
  const machines = [
    {
      id: 1,
      products: [
        { id: 1, name: 'Producto 1', stock: 5, price: 5 },
        { id: 2, name: 'Producto 2', stock: 5, price: 5 },
        { id: 3, name: 'Producto 3', stock: 5, price: 5 },
        { id: 4, name: 'Producto 4', stock: 5, price: 5 },
        { id: 5, name: 'Producto 5', stock: 5, price: 5 },
      ],
      status: 'En funcionamiento',
      earnings: 500,
      credit: 200,
    },
    {
      id: 2,
      products: [
        { id: 6, name: 'Producto 6', stock: 5, price: 5 },
        { id: 7, name: 'Producto 7', stock: 5, price: 5 },
        { id: 8, name: 'Producto 8', stock: 5, price: 5 },
        { id: 9, name: 'Producto 9', stock: 5, price: 5 },
        { id: 10, name: 'Producto 10', stock: 5, price: 5 },
      ],
      status: 'En mantenimiento',
      earnings: 0,
      credit: 0,
    },
    {
      id: 3,
      products: [
        { id: 11, name: 'Producto 11', stock: 5, price: 5 },
        { id: 12, name: 'Producto 12', stock: 5, price: 5 },
        { id: 13, name: 'Producto 13', stock: 5, price: 5 },
        { id: 14, name: 'Producto 14', stock: 5, price: 5 },
        { id: 15, name: 'Producto 15', stock: 5, price: 5 },
      ],
      status: 'Fuera de servicio',
      earnings: 0,
      credit: 0,
    },
    {
      id: 4,
      products: [
        { id: 16, name: 'Producto 16', stock: 5, price: 5 },
        { id: 17, name: 'Producto 17', stock: 5, price: 5 },
        { id: 18, name: 'Producto 18', stock: 5, price: 5 },
        { id: 19, name: 'Producto 19', stock: 5, price: 5 },
        { id: 20, name: 'Producto 20', stock: 5, price: 5 },
      ],
      status: 'En funcionamiento',
      earnings: 1000,
      credit: 500,
    },
    {
      id: 5,
      products: [
        { id: 21, name: 'Producto 21', stock: 5, price: 5 },
        { id: 22, name: 'Producto 22', stock: 5, price: 5 },
        { id: 23, name: 'Producto 23', stock: 5, price: 5 },
        { id: 24, name: 'Producto 24', stock: 5, price: 5 },
        { id: 25, name: 'Producto 25', stock: 5, price: 5 },
      ],
      status: 'En funcionamiento',
      earnings: 750,
      credit: 250,
    },
  ];

  
  useEffect(() => {
    setCurrentMachine(machines[0])
    // getMachines().then((response) => setMachines(response))
}, []);

  
  getMachines();
  const [currentMachine, setCurrentMachine] = useState();

  const handleCurrentMachine = (machineId) => setCurrentMachine(getMachine(machineId));

  return (
    <div className={styles.HomeWrapper}>
      <div className={styles.MachineSelector}>
        <h1 className={styles.SelectorTitle}>Select your Machine by ID</h1>
        {machines?.map((machine) => (
        <button className={`${currentMachine?.id === machine?.id ? styles.idButtonSelected : ''} ${styles.idButton}`} onClick={()=> setCurrentMachine(machine)}>
          {machine.id}
        </button>
        ))}
      </div>
      <MachineStatus machine={currentMachine}/>
      {currentMachine?.id}
    </div>
  );
}

export default HomePage;
