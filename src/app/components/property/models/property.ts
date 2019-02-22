import Topology from './topology';
import Status from './status';

class Property {
  constructor(
    public _id: string,
    public title: string,
    public url: string,
    public price: number,
    public createAt: Date,
    public topology: Topology,
    public status: Status) {
  }
}

export default Property;
