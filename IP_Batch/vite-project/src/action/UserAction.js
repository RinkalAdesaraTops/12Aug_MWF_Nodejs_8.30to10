export const ADD = "increment"
export const MINUS = "decrement"


export const add = ()=>{
    return {
        type: ADD,
      };
}

export const minus = ()=>{
    return {
        type: MINUS,
      };
}