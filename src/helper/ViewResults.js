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
        sorter: (a, b) => {
            const nameA = a.course_name.toLowerCase();
            const nameB = b.course_name.toLowerCase();
            return nameA.localeCompare(nameB);
        },
    },
    {
        title: 'Student Name',

        dataIndex: 'student_name',
        key: 'student_name',
        sorter: (a, b) => {
            const nameA = a.student_name.toLowerCase();
            const nameB = b.student_name.toLowerCase();
            return nameA.localeCompare(nameB);
        },
    },
    {
        title: 'Score',
        dataIndex: 'score',
        key: 'score',
        sorter: (a, b) => { 
            const scoreA = a.score.toLowerCase();
            const scoreB = b.score.toLowerCase();
            return scoreA.localeCompare(scoreB);
        },
    },
    
    // {
    //     title: 'Delete',
    //     key: 'delete',
    //     render: (_, record) => (
    //         <div className='w-full flex items-center justify-center'>
    //             <button
    //                 onClick={() => handleDelete(record.id)}
    //                 className="text-red-500 hover:text-red-700 font-semibold"
    //             >
    //                 <X />
    //             </button>
    //         </div>
    //     ),
    // },
];


export const fetchResults = async (
    setResults,
    setLoading,
    setError,
    searchTerm = ''
) => {
        try {
            setLoading(true);
            const response = await api.get('/results/view-results?searchTerm=' + encodeURIComponent(searchTerm));
            console.log('Fetched results:', response.data);
            setResults(response.data);
        } catch (err) {
            console.error('Error fetching results:', err);
            setError(err?.response?.data?.detail || 'Failed to fetch results. Please try again.');
            setResults([]);
        } finally {
            setLoading(false);
        }
    };


export const deleteResult = async (id, setResults, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await api.delete(`/results/delete-result/${id}`);
        if (response.status === 200) {
            await fetchResults(setResults, setLoading, setError);
            toast.success('Result deleted successfully');
            setError(null);
        } else {
            setError('Failed to delete result. Please try again.');
            toast.error('Failed to delete result. Please try again.');
        }
    } catch (err) {
        console.error('Error deleting result:', err);
        setError(err?.response?.data?.detail || 'Failed to delete result. Please try again.');
        toast.error(err?.response?.data?.detail || 'Failed to delete result. Please try again.');
    } finally {
        setLoading(false);
    }
};
