import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types"

export const incrementAction=()=>{
    return {
        type:INCREMENT
    }
}
export const decrementAction=()=>{
    return {
        type:DECREMENT
    }
}
export const incrementByValue=(vl)=>{
    return {
        type:INC_BY_VALUE,
        value:vl
    }
}