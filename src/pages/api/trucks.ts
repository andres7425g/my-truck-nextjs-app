import { Trucks } from '@/model/trucks.model';
import csv from 'csvtojson';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const { page = 1, limit = 10, facilityType, status, searchTerm } = query;

  switch (method) {
    case 'GET': {
      try {
        const csvFilePath: string = 'src/data/Mobile_Food_Facility_Permit.csv';
        let jsonArray: Trucks[] = await csv().fromFile(csvFilePath);

        // Filter by facilityType
        if (facilityType) {
          jsonArray = jsonArray.filter(
            (item) => item.FacilityType === facilityType,
          );
        }

        // Filter by status
        if (status) {
          jsonArray = jsonArray.filter((item) => item.Status === status);
        }

        // General search
        if (searchTerm) {
          jsonArray = jsonArray.filter((item) =>
            Object.values(item).some((val) =>
              String(val)
                .toLowerCase()
                .includes(String(searchTerm).toLowerCase()),
            ),
          );
        }

        // Calculate start and end index for slicing the jsonArray
        const startIndex: number = (Number(page) - 1) * Number(limit);
        const endIndex: number = Number(page) * Number(limit);

        const totalItems: number = jsonArray.length;
        const totalPages: number = Math.ceil(totalItems / Number(limit));

        const paginatedArray: Trucks[] = jsonArray.slice(startIndex, endIndex);

        res.status(200).json({
          page: Number(page),
          totalPages,
          items: paginatedArray,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        return res
          .status(500)
          .json({ message: 'Internal server error', error });
      }

      break;
    }
  }
};

export default handler;
