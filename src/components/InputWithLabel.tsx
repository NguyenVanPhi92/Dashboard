// *********************
// Role of the component: The label and container for input component
// Name of the component: InputWithLabel.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <InputWithLabel label="Name"><SimpleInput type="text" placeholder="Enter a name..." /></InputWithLabel>
// Input parameters: label: string, children: React.ReactNode
// Output: The label and container for input component
// *********************

const InputWithLabel = ({ label, children }: { label: string; children: React.ReactNode }) => {
    return (
        <div>
            <label className='block mb-1 text-base font-semibold dark:text-whiteSecondary text-blackPrimary'>
                {label}
            </label>
            {children}
        </div>
    )
}
export default InputWithLabel
