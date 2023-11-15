import React from 'react';
import styles from '../styles/MachineStatus.module.css'; // Asegúrate de tener un archivo CSS vinculado


const MachineStatus = ({machine, refresh}) => {

  // Datos hardcodeados (reemplázalos con los datos reales)
  // const products = [
  //   { id: 1, name: 'Producto 1', stock: 5, price: 5 },
  //   { id: 2, name: 'Producto 2', stock: 5, price: 5 },
  //   { id: 3, name: 'Producto 3', stock: 5, price: 5 },
  //   { id: 3, name: 'Producto 3', stock: 5, price: 5 },
  //   { id: 3, name: 'Producto 3', stock: 5, price: 5 },
  //   { id: 3, name: 'Producto 3', stock: 5, price: 5 },
  // ];

  // const status = 'En funcionamiento';
  // const earnings = 500; // Cambia esto con el monto real de ganancias
  // const credit = 200; // Cambia esto con el monto real de crédito


  return (

    <div className={styles.machineStatusContainer}>
        <button onClick={refresh}></button>
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
                <td>{product.product.slice(-4)}</td>
                <td>{product.productName}</td>
                <td>{product.stock}</td> 
                <td>U$D 5.00</td>
              </tr>
              </>
            ))}
          </tbody>
          
          
          </table>
      </div>

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
  );
};

export default MachineStatus;
