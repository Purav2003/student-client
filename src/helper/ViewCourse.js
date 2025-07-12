import { X } from "lucide-react";
import api from '@/conf/api';
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";

// ViewStudents.js

export const getColumns = (handleDelete) => [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <span className="text-primaryText">#{text}</span>,
        sorter: (a, b) => a.id.localeCompare(b.id), // Sort by ID
        
    },
    {
        title: 'Course Name',
        dataIndex: 'course_name',
        key: 'course_name',
        
    },
   
    {
        title: 'Delete',
        key: 'delete',
        render: (_, record) => (
            <div className='w-full flex items-center justify-center'>
                <button
                    onClick={() => handleDelete(record.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                >
                    <X />
                </button>
            </div>
        ),
    },
];


export const fetchCourses = async (
    setCourses,
    setLoading,
    setError,
    searchTerm = ''
) => {
        try {
            setLoading(true);
            const response = await api.get('/courses/view-courses?searchTerm=' + encodeURIComponent(searchTerm));
            console.log('Fetched courses:', response.data);
            setCourses(response.data);
        } catch (err) {
            console.error('Error fetching courses:', err);
            setError(err?.response?.data?.detail || 'Failed to fetch courses. Please try again.');
            setCourses([]);
        } finally {
            setLoading(false);
        }
    };


export const deleteCourse = async (id, setCourses, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await api.delete(`/courses/delete-course/${id}`);
        if (response.status === 200) {
            await fetchCourses(setCourses, setLoading, setError);
            toast.success('Course deleted successfully');
            setError(null);
        } else {
            setError('Failed to delete course. Please try again.');
            toast.error('Failed to delete course. Please try again.');
        }
    } catch (err) {
        console.error('Error deleting course:', err);
        setError(err?.response?.data?.detail || 'Failed to delete course. Please try again.');
        toast.error(err?.response?.data?.detail || 'Failed to delete course. Please try again.');
    } finally {
        setLoading(false);
    }
};
