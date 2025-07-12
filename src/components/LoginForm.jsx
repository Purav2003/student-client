import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import api from '@/conf/api';
const LoginForm = ({ onLoginSuccess }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        // check email 
        if (!form.email || !form.password) {
            setError('Email and Password are required');
            setLoading(false);
            return;
        }
        // check email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Invalid email format');
            setLoading(false);
            return;
        }
        
        try {
            const res = await api.post('/auth/login', form);
            if (res.status === 200) {
                onLoginSuccess(res.data.access_token);
            } else {
                setError(res.data.detail || res.data.message || 'Login failed');
            }
            
        } catch (err) {
            setError(err.response?.data?.detail || 'Network error');    
        }
        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="glass w-[90%] md:w-[35%] bg-[#fff] mt-10 p-8 rounded-[40px] flex flex-col gap-4 border-b-10 border-r-6 border-t-2 border-l-2 border border-[#000]"
        >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-left text-zinc-800 mb-2">Login</h2>
            {/* email icon */}
            <div className="mt-2 flex items-center border border-[#d6d3cd] shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_4px_6px_rgba(0,0,0,0.1)] rounded-lg px-3 py-2 bg-[#fdfaf5]">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full text-sm sm:text-lg bg-transparent outline-none placeholder:text-gray-500"
                />
            </div>

            <div className="mt-2 flex items-center border border-[#d6d3cd] shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_4px_6px_rgba(0,0,0,0.1)] rounded-lg px-3 py-2 bg-[#fdfaf5]">
                <Lock className="w-5 h-5 text-gray-500 mr-2" />
                <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full text-sm sm:text-lg bg-transparent outline-none placeholder:text-gray-500"
                />
                {
                    showPassword ? (
                        <Eye className="w-5 h-5 text-gray-500 mr-2" onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <EyeOff className="w-5 h-5 text-gray-500 mr-2" onClick={() => setShowPassword(!showPassword)} />
                    )
                }
            </div>

            <button
                type="submit"
                disabled={loading}
                className="py-2 w-[160px] sm:py-3 sm:w-[200px] rounded-[15px] cursor-pointer max-w-[200px] mt-4 font-bold text-black border-b-6 border-r-3 border-t-2 border-l-2 border border-[#000] hover:bg-[#000] hover:text-white transition-all duration-300"
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
            {error && <div className="text-red-600 text-left">{error}</div>}
        </form>
    );
};

export default LoginForm; 