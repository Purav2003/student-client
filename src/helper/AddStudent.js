import api from '@/conf/api';
import toast from 'react-hot-toast';

export const fields = [
        { id: 1, name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name'},
        { id: 2, name: 'familyName', label: 'Family Name', type: 'text', placeholder: 'Enter family name'},
        { id: 3, name: 'dateOfBirth', label: 'Date of Birth', type: 'date', placeholder: 'Enter date of birth'},
        { id: 4, name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email'}
    ];


export const handleSubmit = async (e, studentData, setError, setStudentData,setLoading) => {
        setLoading(true);
        e.preventDefault();
        if (!studentData.firstName || !studentData.familyName || !studentData.dateOfBirth || !studentData.email) {
            setError('All fields are required.');
            setLoading(false);
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(studentData.email)) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }
        // check if dateOfBirth is a valid date
        const dob = new Date(studentData.dateOfBirth);
        if (isNaN(dob.getTime())) {
            setError('Please enter a valid date of birth.');
            setLoading(false);
            return;
        }
        // check if dateOfBirth is not in the future
        const today = new Date();
        if (dob > today) {
            setError('Date of birth cannot be in the future.');
            setLoading(false);
            return;
        }
        setError(null); // Clear any previous errors
        // check if user is 10 years or older
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (age < 10) {
            setError('Student must be at least 10 years old.');
            setLoading(false);
            return;
        }

        try{
            const response = await api.post('/students/add-student', studentData);
            if (response.status === 201) {
                setStudentData({
                    firstName: '',
                    familyName: '',
                    dateOfBirth: '',
                    email: ''
                });
                setError(null);
                toast.success('Student added successfully!', {
                    position: 'top-center',
                    duration: 3000
                }   );
            }
            else{
                setError('Failed to add student. Please try again.');
                setLoading(false);
            }
        }
        catch (err) {
            console.error('Error adding student:', err);
            setError(err?.response?.data?.detail || 'Failed to add student. Please try again.');
        }
        setLoading(false);
    };