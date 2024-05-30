const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const task = () => {
  const num = Math.round(Math.random() * 50);
  const an = isPrime(num) ? 'yes' : 'no';
  return [num, an];
};

export default task;
