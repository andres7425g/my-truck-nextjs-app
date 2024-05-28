import { useEffect, useState } from 'react';
import { fetchTrucks } from '@/services/trucks';
import ErrorMessage from '@/atoms/errorMessage';
import Pagination from '@/atoms/pagination';
import Table from '@/app/components/molecules/table';
import { responseTrucks, Trucks } from '@/model/trucks.model';
import FilterBar from '@/molecules/filterBar';

const TableContainer = () => {
  const [data, setData] = useState<responseTrucks | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const [facilityType, setFacilityType] = useState('');
  const [status, setStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { items, totalPages, page: defaultPage } = data ?? {};

  useEffect(() => {
    const getTrucks = async () => {
      try {
        const trucksData = await fetchTrucks(
          page.toString(),
          '10',
          facilityType,
          status,
          searchTerm,
        );
        console.log(trucksData.items.length);
        if (trucksData.items.length === 0) return setError('No data found');
        setData(trucksData);
        setError(null);
      } catch (error) {
        console.error('Error fetching trucks data:', error);
        setError('Error fetching trucks data'); // Set error state
      } finally {
        setIsLoading(false);
      }
    };
    getTrucks();
  }, [page, facilityType, status, searchTerm]);

  const onSearch = (input: string) => {
    setSearchTerm(input);
  };

  const refresh = () => {
    setStatus('');
    setFacilityType('');
    setSearchTerm('');
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <FilterBar
            facilityType={facilityType}
            setFacilityType={setFacilityType}
            status={status}
            setStatus={setStatus}
            onSearch={onSearch}
          />
          {error ? (
            <ErrorMessage message={error} onRefresh={refresh} />
          ) : (
            <Table trucks={items as Trucks[]} />
          )}
          <Pagination
            totalPages={totalPages}
            setPage={setPage}
            currentPage={defaultPage}
          />
        </>
      )}
    </div>
  );
};

export default TableContainer;
