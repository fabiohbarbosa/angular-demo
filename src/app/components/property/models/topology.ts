enum Topology {
  t2 = 'T2',
  t3 = 'T3',
  t4 = 'T4'
}

const getFromIndex = (index: string): Topology => {
  return Topology[index];
}

export { getFromIndex };
export default Topology;
