import { useState, useEffect } from 'react'
import './App.css'
import InputComp from './Components/InputComp'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  useEffect(() => {
    console.log("render");
  })

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo)

  function convertCurrency() {
    setConvertedAmount(amount * currencyInfo[to])
  }

  function Swap() {
    setFrom(to);
    setTo(from)
    setAmount(convertedAmount)
  }

  return (
    <>
      <div className='w-screen min-h-screen bg-slate-500 flex justify-center items-center'>
        <div className='w-72 text-center flex'>

          <form onSubmit={(e) => {
            e.preventDefault();
            convertCurrency()
          }}>
            <InputComp
              label={'From'}
              value={amount}
              onAmountChange={(amount) => setAmount(amount)}
              readOnly={false}
              options={options}
              currencyType={from}
              onCurrencyChange={(cur) => setFrom(cur)}
            />


            <InputComp
              label={'To'}
              value={convertedAmount}
              onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
              readOnly={true}
              options={options}
              currencyType={to}
              onCurrencyChange={(cur) => setTo(cur)}
            />

            <button className='rounded-md font-semibold text-center w-44 bg-yellow-100 mt-2' type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            <button className='text-center rounded-md font-semibold w-32 bg-yellow-100 m-1' onClick={Swap}>Swap</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
