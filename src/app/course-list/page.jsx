'use client';
import Listing from '@/components/Listing';
import { fetchCourses, deleteCourse, getColumns } from '@/helper/ViewCourse';

export default function CourseList() {
  return (
    <Listing
      title="Course List"
      placeholder="Search by course name"
      addLink="/add-course"
      addText="Add Course"
      noDataText="No Courses Found"
      fetchFn={fetchCourses}
      deleteFn={deleteCourse}
      getColumnsFn={getColumns}
    />
  );
}
