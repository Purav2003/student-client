import api from '@/conf/api';
import toast from 'react-hot-toast';

export const fields = [
        { id: 1, name: 'courseName', label: 'Course Name', type: 'text', placeholder: 'Enter Course name'},
]


export const handleSubmit = async (e, courseData, setError, setCourseData,setLoading) => {
        setLoading(true);
        e.preventDefault();
        if (!courseData.courseName) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }
        

        try{
            const response = await api.post('/courses/add-course', courseData);
            if (response.status === 201) {
                setCourseData({
                    courseName: ''
                });
                setError(null);
                toast.success('Course added successfully!', {
                    position: 'top-center',
                    duration: 3000
                });
            }
            else{
                setError('Failed to add course. Please try again.');
            }
        }
        catch (err) {
            console.error('Error adding course:', err);
            setError(err?.response?.data?.detail || 'Failed to add course. Please try again.');
        }
        setLoading(false);
    };