"use client";
import React, { useEffect, useState } from 'react';
import Form from '@/components/Form';
import { fetchFields, handleSubmit } from '@/helper/AddResult';
import { fetchCourses } from '@/helper/ViewCourse';
import { fetchStudents } from '@/helper/ViewStudents';

const AddResult = () => {
    const [courseData,setCourseData]=useState([])
    const [students,setStudents]=useState([])
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [resultData, setResultData] = useState({
        course_id: '',
        student_id: '',
        score: '',    
    });
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        await handleSubmit(e, resultData, setError, setResultData,setSubmitLoading);
    }

    useEffect(() => {
        fetchCourses(setCourseData, setLoading, setError,'');
        fetchStudents(setStudents, setLoading, setError,'');
    },[])

    useEffect(() => {
        if (!courseData || !students) return;
        const allFields = fetchFields(courseData, students);
        setFields(allFields);

    }, [courseData, students]);


    
    return (
        <div className="min-h-screen px-4 sm:px-6 py-10 sm:py-16 flex justify-center items-center">
            <Form formTitle="Add New Result" handleSubmit={onSubmit} fields={fields} data={resultData} setData={setResultData} error={error} loading={submitLoading} />
        </div>
    );
};

export default AddResult;
