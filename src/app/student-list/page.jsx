'use client';
import Listing from '@/components/Listing';
import { fetchStudents, deleteStudent, getColumns } from '@/helper/ViewStudents';

export default function StudentList() {
  return (
    <Listing
      title="Student List"
      placeholder="Search by name or email"
      addLink="/add-student"
      addText="Add Student"
      noDataText="No Students Found"
      fetchFn={fetchStudents}
      deleteFn={deleteStudent}
      getColumnsFn={getColumns}
    />
  );
}
