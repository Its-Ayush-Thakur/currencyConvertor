import React from 'react'

const InputComp = ({
    label,
    value,
    onAmountChange,
    readOnly,
    options = [],
    currencyType,
    onCurrencyChange
}) => {
    return (
        <>
            <div className=' rounded-md p-1 m-1 w-72 flex flex-col bg-slate-300'>
                <div className='w-full text-center'>
                <label className='font-medium' htmlFor="inp">{label}</label>
                </div>
                <div className='w-full h-full text-center'>
                <input className='outline-none bg-transparent w-28'
                    type='number'
                    id='inp'
                    value={value}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    readOnly={readOnly}
                />
                <select className='outline-none bg-transparent w-16'
                    value={currencyType}
                    onChange={(e) => onCurrencyChange((e.target.value))}
                >
                    {options.map((e) => {
                        return (
                            <option key={e} value={e}>{e}</option>)
                    })}
                </select>

                </div>
            </div>
        </>
    )
}

export default InputComp