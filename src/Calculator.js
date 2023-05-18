import React, { useState } from 'react'

const Calculator = () => {
    const[result,setResult]=useState(0);
    const clearAll=()=>{
        setResult("");
    }
    const handleInput=(e)=>{
        setResult(result.concat(e.target.value));
    }
    const backSpace=()=>{
        setResult(result.slice(0,result.length-1));
        }
        const calculate=()=>{
            setResult(eval(result).toString());
        }
  return (
    <>
     <div className='container'>
     <input type='text' value={result} id="result"/>
        <div className='btn'>
            <button className="btn-style" onClick={clearAll}><i class="fa-solid fa-c"></i></button>
            <button className="btn-style" value="%" onClick={handleInput}>%</button>
            <button className="btn-style" onClick={backSpace}><i class="fa-solid fa-delete-left"></i></button>
            <button className="btn-style" value="/" onClick={handleInput}>/</button>
        </div>
        <div className='btn'>
            <button className="btn-style" value="7" onClick={handleInput}>7</button>
            <button className="btn-style" value="8" onClick={handleInput}>8</button>
            <button className="btn-style" value="9" onClick={handleInput}>9</button>
            <button className="btn-style" value="*" onClick={handleInput}>*</button>
        </div>
        <div className='btn'>
            <button className="btn-style" value="4" onClick={handleInput}>4</button>
            <button className="btn-style" value="5" onClick={handleInput}>5</button>
            <button className="btn-style" value="6" onClick={handleInput}>6</button>
            <button className="btn-style" value="-" onClick={handleInput}>-</button>
        </div>
        <div className='btn'>
            <button className="btn-style" value="1" onClick={handleInput}>1</button>
            <button className="btn-style" value="2" onClick={handleInput}>2</button>
            <button className="btn-style" value="3" onClick={handleInput}>3</button>
            <button className="btn-style" value="+" onClick={handleInput}>+</button>
        </div>
        <div className='btn'>
            <button className="btn-style" value="0" onClick={handleInput}>0</button>
            <button className="btn-style" value="00" onClick={handleInput}>00</button>
            <button className="btn-style" value="." onClick={handleInput}>.</button>
            <button className="btn-style" onClick={calculate}><i class="fa-solid fa-equals"></i></button>
        </div>
     </div>
     </>
  )
}

export default Calculator;