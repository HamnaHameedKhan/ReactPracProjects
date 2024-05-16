import React, { useId } from 'react'

function InputBox({ label,
  currencyOptions = [],
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = 'USD',
  amountDisable = false,
  currencyDisable = false,
}) {
  const AmountInputId = useId()

  return (
    <>
      <div className='flex flex-row  justify-around items-center p-5 border rounded-lg shadow-sm bg-white max-w-screen-md '>
        <div className='flex flex-col'>
          <label className='mb-5' htmlFor={AmountInputId}>{label}</label>
          <input type='number' className='border bg-slate-200 rounded-md p-2 outline-none'
            placeholder='amount' disabled={amountDisable} value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            id={AmountInputId}
          />
        </div>

        <div className='flex flex-col '>
          <label className='mb-5'>Currency Type</label>
          <select className='border rounded-md p-2 bg-slate-200' value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} >

            {currencyOptions.map((currency, index) => (
              <option value={currency} key={index}>{currency}</option>
            ))}

          </select>
        </div>
      </div>

    </>
  )
}

export default InputBox
