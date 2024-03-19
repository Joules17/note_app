// TagInput.js
import React, { useState } from 'react';

const TagInput = ({ value, onChange, onAddTag, placeholder, addButtonLabel, maxTags }) => {
    const [inputValue, setInputValue] = useState(value); // Utilizar el estado interno para el valor de la entrada

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
    };

    const addTag = () => {
        const newTag = inputValue.trim();
        if (newTag !== '') {
            onAddTag(newTag);
            setInputValue(''); // Resetear el valor de la entrada después de agregar la etiqueta
        }
    };

    const handleAddClick = () => {
        addTag();
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e); // Llamar a la función onChange para actualizar el valor en el componente padre
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-md">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange} // Utilizar la función handleChange para actualizar el valor de la entrada
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="appearance-none rounded-l-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
                type="button"
                onClick={handleAddClick}
                className="py-2 px-4 bg-green-800 hover:bg-green-900 text-white font-bold rounded-r-md focus:outline-none focus:shadow-outline"
                disabled={inputValue.trim() === '' || inputValue.trim().split(',').length >= maxTags}
            >
                {addButtonLabel}
            </button>
        </div>
    );
};

export default TagInput;
