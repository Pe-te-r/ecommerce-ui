import { useState } from 'react';

const CustomDropdown = ({ options, value, onChange }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: any) => {
        onChange(option.id);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block font-sans w-4/5 mx-auto">
            <div className="flex justify-between items-center bg-white border border-gray-300 rounded-md px-3 py-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span>{options.find((option: any) => option.id === value)?.name || 'Select location'}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {options.map((option: any) => (
                        <div
                            key={option.id}
                            onClick={() => handleSelect(option)}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-400 ${option.id === value ? 'bg-gray-600 text-white' : ''}`}
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;

