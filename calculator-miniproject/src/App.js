import { useState } from "react";

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];

	const updateCalc = value => {
		/* if the last value is an operator and the calculation has nothing
		or the value is an operator and the last value was also an operator, return 
		and not do anything*/
		if (
			ops.includes(value) && calc == '' ||
			ops.includes(value) && ops.includes(calc.slice(-1)) //calc.slice(-1) This gets the last character of the calc string
		){
			return;
		}

		setCalc(calc+value);

		//check if value is not an operator, if true then Evaluates the concatenated string
		if (!ops.includes(value)){
			setResult(eval(calc+value).toString())
		}
	}

	//Buttons 1-9 are returned from this function
	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++){
			digits.push(
				<button 
					
					onClick={() => updateCalc(i.toString())}
					key={i}>
					{i}
				</button>
			)
		}
		return digits;
	}

	// Evaluates the mathematical expression contained in the calc variable and updates calc with the result
	const calculate = () => {
		//returns when ever = is spammed when on default 0
		if (calc == '' || calc == '0'){
			return;
		}
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		//checks if the calc string is empty
		if (calc == ''){
			return;
		}
		//removes the last character
		const value = calc.slice(0, -1);
		setCalc(value);
	}
	
	return (
		<div className="App">
			<h1 className="title">Welcome to Pavle's Calculator App!</h1>
			<div className="calculator">
				<div className="display">
					{/* Span element is used to conditionally display a value */}
					{/* If there is a value, then span, else return nothing */}
					{result ? <span>({result})</span> : '' }&nbsp; {calc || "0"}
				</div>

				<div className="operators">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>
					
					<button onClick={calculate}>=</button>
				</div>

			</div>
		</div>
	);
}

export default App;
