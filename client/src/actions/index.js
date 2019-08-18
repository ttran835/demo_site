export const increment = (number) => {
  return {
    type: 'INCREMENT',
    payload: number,
  };
};

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num,
  };
};

export const signIn = () => {
  return {
    type:'SIGN_IN', 
  }
}