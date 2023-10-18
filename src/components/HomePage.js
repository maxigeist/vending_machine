import { getCredit, getEarnings, getProducts, getStatus, getMachines } from '../service/apis';
import MachineStatus from './MachineStatus';

function HomePage() {
  const machine = {
    machineId: getMachines(),
    products: getProducts(),
    status: getStatus(),
    earnings: getEarnings(),
    credit: getCredit()
  }
  
  c

  return (
    <div>
      <MachineStatus machine={machine}/>
    </div>
  );
}

export default HomePage;
