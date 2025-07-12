"use client";
import React from 'react';
import { Loader, PlusCircle } from 'lucide-react';

const Form = ({ formTitle, handleSubmit, fields, data, setData, error,loading }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOptionChange = (e) => {
        const { name,value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl md:max-w-4xl lg:max-w-6xl bg-[#ffffff] rounded-[40px] sm:rounded-[50px] shadow-xl border-b-[15px] border-r-[6px] border-t-[4px] border-l-4 border border-[#000000] p-6 sm:p-10 md:p-12"
        >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-bold mb-6 sm:mb-10 flex items-center gap-4">
                {formTitle}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-md text-[#000000]">
                {fields.map((field) => (

                    <div key={field.id}>

                        <>
                            <label className="block text-lg text-[#52525c] font-bold mb-1">
                                * {field.label}
                            </label>
                            <div className='flex items-center bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-xl'>
                                {field?.type !== "multi" ? <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    value={data[field.name]}
                                    onChange={handleInputChange}
                                    className="w-full bg-transparent outline-none"
                                />

                                    : (
                                        <select
                                            name={field.name}
                                            value={data[field.name] || ''} // ✅ Use dynamic state value
                                            onChange={(e) => handleOptionChange(e, field)}
                                            className="w-full bg-transparent outline-none"
                                        >
                                            <option value="" disabled>
                                                {field.placeholder}
                                            </option>

                                            {field?.options?.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>


                                    )}
                            </div>
                        </>

                    </div>
                ))}
            </div>

            <div className="mt-10">
                <button
                    type="submit"
                    className="px-6 py-3 text-white bg-slate-950 rounded-md hover:bg-slate-950/90 transition cursor-pointer"
                >
                    {loading ? (
                        <div className='px-12 flex items-center justify-center'>
                        <Loader className='inline mr-2 animate-spin' />
                        </div>
                    ) :
                    <>
                    <PlusCircle className="inline mr-2" />
                    Add {formTitle?.split(' ')[2] || ''}
                    </>}
                </button>
            </div>
            {error && <div className="mt-4 text-red-600 text-lg">{error}</div>}
        </form>
    );
};

export default Form;
