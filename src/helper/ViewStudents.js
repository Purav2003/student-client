import { X } from "lucide-react";
import api from '@/conf/api';
import { useState, useEffect } from 'react';
import toast  from "react-hot-toast";

// ViewStudents.js

export const getColumns = (handleDelete) => [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <span className="text-[#000000]">#{text}</span>,
        sorter: (a, b) => a.id.localeCompare(b.id), // Sort by ID
        
    },
    {
        title: 'Name and Family Name',
        render: (text, record) => `${record.first_name} ${record.family_name}`,
        key: 'name',
        sorter: (a, b) => {
            const nameA = `${a.first_name} ${a.family_name}`.toLowerCase();
            const nameB = `${b.first_name} ${b.family_name}`.toLowerCase();
            return nameA.localeCompare(nameB);
        },
    },
    {
        title: 'DOB',
        dataIndex: 'dob',
        key: 'dob',
        sorter: (a, b) => {
            const dateA = new Date(a.dob);
            const dateB = new Date(b.dob);
            return dateA - dateB;
        },
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
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


export const fetchStudents = async (
    setStudents,
    setLoading,
    setError,
    searchTerm = ''
) => {
        try {
            setLoading(true);
            const response = await api.get('/students/view-students?searchTerm=' + encodeURIComponent(searchTerm));
            console.log('Fetched students:', response.data);
            setStudents(response.data);
        } catch (err) {
            console.error('Error fetching students:', err);
            setError(err?.response?.data?.detail || 'Failed to fetch students. Please try again.');
            setStudents([]);
        } finally {
            setLoading(false);
        }
    };


export const deleteStudent = async (id, setStudents, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await api.delete(`/students/delete-student/${id}`);
        if (response.status === 200) {
            await fetchStudents(setStudents, setLoading, setError);  
            toast.success('Student deleted successfully');
            setError(null);
        } else {
            setError('Failed to delete student. Please try again.');
            toast.error('Failed to delete student. Please try again.');
        }
    } catch (err) {
        console.error('Error deleting student:', err);
        setError(err?.response?.data?.detail || 'Failed to delete student. Please try again.');
        toast.error(err?.response?.data?.detail || 'Failed to delete student. Please try again.');
    } finally {
        setLoading(false);
    }
};
