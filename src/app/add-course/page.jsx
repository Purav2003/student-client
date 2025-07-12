"use client";
import React, { useState } from 'react';
import Form from '@/components/Form';
import { fields, handleSubmit } from '@/helper/AddCourse';

const AddCourse = () => {
    const [courseData, setCourseData] = useState({
        courseName: ''    
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        await handleSubmit(e, courseData, setError, setCourseData,setLoading);
    }
    
    return (
        <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 flex justify-center items-center">
            <Form formTitle="Add New Course" handleSubmit={onSubmit} fields={fields} data={courseData} setData={setCourseData} error={error} loading={loading}/>
        </div>
    );
};

export default AddCourse;
