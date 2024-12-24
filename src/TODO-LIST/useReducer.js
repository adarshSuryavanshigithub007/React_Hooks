export const todoReducer = (state,action)=>{
    switch (action.type) {
        case "ADD TASK":
          return[...state,action.payload]  
          
        case "DELETE TASK":
          return state.filter((_,index)=>index!==action.payload)  
        default:
            return state
    }
}