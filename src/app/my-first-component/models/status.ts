enum Status {
  MATCHED = 'Matched',
  OUT_OF_FILTER = 'Out of filter',
  PENDING = 'Pending',
  UNVAILABLE = 'Unvailable'
}

const getFromIndex = (index: string): Status => {
  return Status[index];
}

export { getFromIndex };
export default Status;
