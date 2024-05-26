export const fetchTrucks = async (
  page: string,
  limit: string,
  facilityType?: string,
  status?: string,
  searchTerm?: string,
) => {
  try {
    const params = new URLSearchParams({
      page,
      limit,
      ...(facilityType && { facilityType }),
      ...(status && { status }),
      ...(searchTerm && { searchTerm }),
    });

    const response = await fetch(`/api/trucks?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching trucks:', error);
    throw error;
  }
};
