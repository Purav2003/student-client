"use client";
import React, { useState } from 'react';
import Form from '@/components/Form';
import { fields, handleSubmit } from '@/helper/AddStudent';

const AddStudent = () => {
    const [studentData, setStudentData] = useState({
        firstName: '',
        familyName: '',
        dateOfBirth: '',
        email: '',
        id: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        await handleSubmit(e, studentData, setError, setStudentData,setLoading);
    }
    
    return (
        <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 flex justify-center items-center">
            <Form formTitle="Add New Student" handleSubmit={onSubmit} fields={fields} data={studentData} setData={setStudentData} error={error} loading={loading} />
        </div>
    );
};

export default AddStudent;
