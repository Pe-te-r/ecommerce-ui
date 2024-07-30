interface InputType{
    label: string,
    type: string,
    name: string
}

const InputDiv = ({label,type,name}: InputType) => {
    return (
        <div className="flex flex-col w-4/5 mx-auto font-sans">
            <label htmlFor={name} className="mb-2  text-[1.5rem]">{label}</label>            
            <input type={type} name={name}  className="py-4 px-3 border-none outline-none text-[20px] rounded-md"/>
        </div>
    )
}

export default InputDiv
