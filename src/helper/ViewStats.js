import { Users, BookOpen, FileText } from 'lucide-react';
import api from '@/conf/api';

export const fetchStatsCards = (data) => {
  return [
    {
      title: 'Total Students',
      value: data?.total_students,
      icon: Users,
      color: 'text-blue-600',
      link: '/student-list'
    },
    {
      title: 'Total Courses',
      value: data?.total_courses,
      icon: BookOpen,
      color: 'text-green-600',
      link: '/course-list'
    },
    {
      title: 'Total Results',
      value: data?.total_results,
      icon: FileText,
      color: 'text-purple-600',
      link: '/result-list'
    }
  ];
};

export const fetchData = async (setLoading) => {
    try {
      const response = await api.get('/stats/view-stats');
      return response?.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };