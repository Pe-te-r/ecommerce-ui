interface InputType {
    label: string,
    type: string,
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputDiv = ({ label, type, name, value, onChange }: InputType) => {
    return (
        <div className="flex flex-col w-4/5 mx-auto font-sans">
            <label htmlFor={name} className="mb-2 text-[1.5rem]">{label}</label>            
            <input 
                type={type} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="py-4 px-3 border-none outline-none text-[20px] rounded-md"
            />
        </div>
    )
}

export default InputDiv
