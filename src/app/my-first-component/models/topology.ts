enum Topology {
  t2 = 'T2',
  t3 = 'T3',
  t4 = 'T4'
}

const getFromIndex = (value: string): Topology => {
  return Topology[value];
}

export { getFromIndex };
export default Topology;
