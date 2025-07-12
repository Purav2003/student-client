'use client';
import Listing from '@/components/Listing';
import { fetchResults, deleteResult, getColumns } from '@/helper/ViewResults';

export default function ResultList() {
  return (
    <Listing
      title="Result List"
      placeholder="Search by name or course"
      addLink="/add-result"
      addText="Add Result"
      noDataText="No Results Found"
      fetchFn={fetchResults}
      deleteFn={deleteResult}
      getColumnsFn={getColumns}
    />
  );
}
