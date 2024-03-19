import React, { useState } from 'react';
import TagInput from './TagInput'; 

const CreateNoteModal = ({ onSubmit, onClose }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [categoryInput, setCategoryInput] = useState('');
    const [categories, setCategories] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedCategories = categories.map(category => category.trim());
        onSubmit({
            title: noteTitle,
            content: noteContent,
            categories: formattedCategories,
            archived: false,
        });
        onClose();
    };

    const handleAddTag = (newTag) => {
        if (newTag.trim() && categories.length < 5 && !categories.includes(newTag.trim())) {
            setCategories([...categories, newTag.trim()]);
        }
    };

    const handleRemoveTag = (tag) => {
        const updatedCategories = categories.filter(category => category !== tag);
        setCategories(updatedCategories);
    };

    // console.log('My categories', categories)
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-gray-900 bg-opacity-50 fixed top-0 left-0 w-full h-full"></div>
            <div className="bg-white border border-black rounded-lg p-8 relative z-10 max-w-lg w-full h-600">
                <div className="font-bold text-green-800 text-xl mb-4">New Note</div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Note Title
                        </label>
                        <input
                            type="text"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter note title"
                            maxLength="200"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Note Content
                        </label>
                        <textarea
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
                            placeholder="Enter note content"
                            style={{ minHeight: '100px', maxHeight: '300px' }}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
                            Categories
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {categories.map((category, index) => (
                                <div key={index} className="flex items-center bg-gray-200 rounded-md px-2 py-1">
                                    <span>{category}</span>
                                    <button type="button" onClick={() => handleRemoveTag(category)} className="ml-2">
                                        &#10005;
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <TagInput
                                value={categoryInput} // Pasar el estado categoryInput como valor
                                onChange={(e) => setCategoryInput(e.target.value)} // Actualizar el estado categoryInput
                                onAddTag={handleAddTag}
                                placeholder="Enter categories"
                                addButtonLabel="Add Category"
                                maxTags={5} 
                            />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-2">
                        <button
                            type="button"
                            className="border border-red-600 text-red-600 hover:bg-red-100 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Create Note
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNoteModal;
