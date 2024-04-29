Let's clarify the flow of data and function calls between the `App` component and the `InputComp` component:

1. **Data Flow**:
   - Data (such as `value`, `readOnly`, `options`, and `currencyType`) flows from the `App` component to the `InputComp` component as props.
   - The `App` component manages the state (`amount`, `from`, `to`, and `convertedAmount`) and passes the necessary data to `InputComp` as props.

2. **Function Flow**:
   - The `onAmountChange` and `onCurrencyChange` functions are passed from the `App` component to the `InputComp` component as props.
   - When an event (like changing the input value or selecting a currency) occurs in the `InputComp` component, it triggers the respective function passed down from `App`.
   - These functions (`onAmountChange` and `onCurrencyChange`) are invoked in the `InputComp` component, but their logic resides in the `App` component.
   - So, the flow of function calls is from `InputComp` to `App` when these functions are invoked.

In summary, the data flows from `App` to `InputComp` through props, while function calls flow from `InputComp` to `App` when events occur in the `InputComp`.
