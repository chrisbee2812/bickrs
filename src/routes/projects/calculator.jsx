import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import '../../styles/projects/calculator/calculator.css'

export const Route = createFileRoute('/projects/calculator')({
  component: RouteComponent,
})


function RouteComponent() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('0')

    const handleClick = (value) => {
        if (value === 'eq') {
            try {
                setResult(eval(input).toString())
                setInput(eval(input).toString())
            } catch (e) {
                setResult('Error')
            }
        } else if (value ==='c') {
            setInput('')
            setResult('0')
        } else {
            setInput(input + value)
        }
    }

    console.log(input)
    console.log(result)


  return (
  <div className="calculator">
    <section>
        <div className="display">{input || '0'}</div>
    </section>
    <section className="calc-keyboard">
        <div className="key-pad" onClick={() => handleClick('per')}>%</div>
        <div className="key-pad" onClick={() => handleClick('ce')}>CE</div>
        <div className="key-pad" onClick={() => handleClick('c')}>C</div>
        <div className="key-pad" onClick={() => handleClick('del')}>del</div>
        <div className="key-pad" onClick={() => handleClick('oneover')}>1/x</div>
        <div className="key-pad" onClick={() => handleClick('sq')}>x<sup>2</sup></div>
        <div className="key-pad" onClick={() => handleClick('sqr')}>sqr</div>
        <div className="key-pad" onClick={() => handleClick('/')}>/</div>
        <div className="key-pad" onClick={() => handleClick('7')}>7</div>
        <div className="key-pad" onClick={() => handleClick('8')}>8</div>
        <div className="key-pad" onClick={() => handleClick('9')}>9</div>
        <div className="key-pad" onClick={() => handleClick('*')}>x</div>
        <div className="key-pad" onClick={() => handleClick('4')}>4</div>
        <div className="key-pad" onClick={() => handleClick('5')}>5</div>
        <div className="key-pad" onClick={() => handleClick('6')}>6</div>
        <div className="key-pad" onClick={() => handleClick('-')}>-</div>
        <div className="key-pad" onClick={() => handleClick('1')}>1</div>
        <div className="key-pad" onClick={() => handleClick('2')}>2</div>
        <div className="key-pad" onClick={() => handleClick('3')}>3</div>
        <div className="key-pad" onClick={() => handleClick('+')}>+</div>
        <div className="key-pad" onClick={() => handleClick('pm')}>+-</div>
        <div className="key-pad" onClick={() => handleClick('0')}>0</div>
        <div className="key-pad" onClick={() => handleClick('.')}>.</div>
        <div className="key-pad" onClick={() => handleClick('eq')}>=</div>
    </section>
  </div>
)}
