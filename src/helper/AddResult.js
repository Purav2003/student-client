import api from '@/conf/api';
import toast from 'react-hot-toast';

export const fetchFields = (courses, students) => {
    return [
    {
            id: 1,
            name: 'course_id',
            label: 'Course Name',
            type: 'multi',
            placeholder: 'Select Course Name',
            options: courses?.map(course => ({
                label: course.course_name,
                value: course.id.toString(),
            })),
        },
        {
            id: 2,
            name: 'student_id',
            label: 'Student Name',
            type: 'multi',
            placeholder: 'Select Student Name',
            options: students?.map(student => ({
                label: `${student.first_name} ${student.family_name}`,
                value: student.id.toString(),
            })),
        },
        {
            id: 3,
            name: 'score',
            label: 'Score',
            type: 'multi',
            options: [
                { label: 'A', value: 'A' },
                { label: 'B', value: 'B' },
                { label: 'C', value: 'C' },
                { label: 'D', value: 'D' },
                { label: 'E', value: 'E' },
                { label: 'F', value: 'F' },
            ],
            placeholder: 'Enter Marks',
        },    
    
    ];
};


export const handleSubmit = async (e, resultData, setError, setResultData,setSubmitLoading) => {
        e.preventDefault();
        setSubmitLoading(true);
        if (!resultData.course_id || !resultData.student_id || !resultData.score) {
            setError('All fields are required.');
            setSubmitLoading(false);
            return;
        }

        try {
            const response = await api.post('/results/add-result', resultData);
            if (response.status === 201) {
                setResultData({
                    course_id: '',
                    student_id: '',
                    score: '',
                });
                setError(null);
                toast.success('Result added successfully!', {
                    position: 'top-center',
                    duration: 3000
                });
            } else {
                setError('Failed to add result. Please try again.');
            }
        } catch (err) {
            console.error('Error adding result:', err);
            setError(err?.response?.data?.detail || 'Failed to add result. Please try again.');
        }
        setSubmitLoading(false);
    };  