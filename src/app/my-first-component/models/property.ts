import Topology from './topology';
import Status from './status';

interface Property {
  title: string;
  price: number;
  createAt: Date;
  topology: Topology;
  status: Status;
}

export default Property;
