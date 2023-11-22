import React, {useEffect, useState} from 'react';
import styles from '../styles/MachineStatus.module.css'; // Asegúrate de tener un archivo CSS vinculado
import Statistics from './Stadistics';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";

const MachineStatus = ({machine, refresh, refreshVar, loader}) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [machine.status, machine.earnings, machine.credit, machine.products])

    const handleClick = async () => {
            setLoading(true);
            refresh()
                .then(() => {
                    console.log("hola")
                })
                .finally(() => {
                    // setLoading(false);
                });

    };

    const handleLoading = (value) => {
        loader(false);
        setLoading(value);
    }




  return (
      <div>
          <Loader open={loading} />
    <div className={styles.machineStatusContainer}>

        <button onClick={handleClick} className={styles.idButton}> <FontAwesomeIcon icon={faRotate} /></button>
      <h1 className={styles.h1VendingMachine}>Estado de la Máquina Expendedora</h1>

      <div className={styles.statusItem}>
        <h2 className={styles.h2}>Productos</h2>
        
        <table style={{width:"100%"}}>
          <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
          </thead>
          <tbody>

            {machine?.products.map((product) => (
              <>
              <tr>
                <td>{product.product._id.slice(-4)}</td>
                <td>{product.product.name}</td>
                <td>{product.stock}</td> 
                <td>U$D {product.product.price}.00</td>
              </tr>
              </>
            ))}
          </tbody>
          
          
          </table>
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.statusItem}>
          <h2 className={styles.h2}>Estado</h2>
          <p className={styles.p}>{machine?.status ? "✅" : "❌" }</p>
        </div>

        <div className={styles.statusItem}>
          <h2 className={styles.h2}>Ganancias</h2>
          <p className={styles.p}>${machine?.earnings}</p>
        </div>

        <div className={styles.statusItem}>
          <h2 className={styles.h2}>Crédito</h2>
          <p className={styles.p}>${machine?.credit}</p>
        </div>
    </div>
      </div>
      {/* <div style={{height: '1rem'}}> */}

      <Statistics className={styles.statusItem} currentMachineId={machine.machineId} refreshVar={refreshVar} loading={handleLoading}/>
      {/* </div> */}
      </div>
  );
};

export default MachineStatus;
