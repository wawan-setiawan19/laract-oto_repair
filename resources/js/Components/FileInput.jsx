import React, { useState, useRef } from 'react';
import { filesize } from '@/utils';

const Button = ({ text, onClick }) => (
    <button
        type="button"
        className="px-4 py-2 text-xs font-medium text-white bg-gray-600 rounded-sm focus:outline-none hover:bg-gray-700"
        onClick={onClick}
    >
        {text}
    </button>
);

export default ({ className, name, label, accept, errors = [], onChange }) => {
    const fileInput = useRef();
    const [file, setFile] = useState(null);

    function browse() {
        fileInput.current.click();
    }

    function remove() {
        setFile(null);
        onChange(null);
        fileInput.current.value = null;
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        setFile(file);
        onChange(file);
    }

    return (
        <div className={className}>
            <div className={`border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm form-input p-0 ${errors.length && 'error'}`}>
                <input
                    id={name}
                    ref={fileInput}
                    accept={accept}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {!file && (
                        <Button text="Browse" onClick={browse} />
                )}
                {file && (
                    <div className="flex items-center justify-between p-2">
                        <div className="w-10/12">
                            <div className="break-words">
                                {file.name}
                            </div>
                            <span className="ml-1 text-xs text-gray-600">
                                ({filesize(file.size)})
                            </span>
                        </div>
                        <Button text="Remove" onClick={remove} />
                    </div>
                )}
            </div>
            {errors.length > 0 && <div className="form-error">{errors}</div>}
        </div>
    );
};