const initialState = {
    count:0,
    color:"red"
}
const CounterReducer = (state=initialState,action) => {
  switch(action.type){
        case "ADD":
            return {
                ...state,
                count:state.count+1       
            }
        case "MINUS":
            return {
                ...state,
                count:state.count-1       
            }
        case "Changecolor":
            return {
                ...state,
                color:"blue"
            }
        default:return state
  }
}

export default CounterReducer
