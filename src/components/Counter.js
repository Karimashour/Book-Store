import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, INC_BY_VALUE } from "../redux/actions/types";
import { decrementAction, incrementAction, incrementByValue } from "../redux/actions/counterActions";
function Counter() {
  const countState = useSelector((state) => state.count);
  const dispatch=useDispatch()
  console.log(countState);
  const handleIncrement = () => {
    dispatch(incrementAction())//حطيت التايب اكشن في ملف لوحده واجي استدعي الفانكشن علي طول جوه الديسباتش
  };
  const handleDecrement = () => {
    dispatch(decrementAction())//حطيت التايب اكشن في ملف لوحده واجي استدعي الفانكشن علي طول جوه الديسباتش
  };
  const handleIncByValue=(vl)=>{
    dispatch(incrementByValue(vl))
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>{countState}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={()=>handleIncByValue(40)}>inc</button>
    
    </div>
  );
}
export default Counter;
