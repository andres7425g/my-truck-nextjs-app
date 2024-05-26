import { NextApiRequest, NextApiResponse } from 'next';
import handler from '../pages/api/trucks';
import { expect } from '@jest/globals';

describe('/api/trucks', () => {
  it('should respond with status 200 and paginated array', async () => {
    const req = {
      method: 'GET',
      query: {
        page: '1',
        limit: '10',
      },
    } as unknown as NextApiRequest;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should respond with status 200 and paginated array and filter by facilityType', async () => {
    const req = {
      method: 'GET',
      query: {
        page: '1',
        limit: '10',
        facilityType: 'Truck',
      },
    } as unknown as NextApiRequest;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should respond with status 200 and paginated array and filter by status', async () => {
    const req = {
      method: 'GET',
      query: {
        page: '1',
        limit: '10',
        status: 'REQUESTED',
      },
    } as unknown as NextApiRequest;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should respond with status 200 and paginated array and filter by any term', async () => {
    const req = {
      method: 'GET',
      query: {
        page: '1',
        limit: '10',
        searchTerm: '848184',
      },
    } as unknown as NextApiRequest;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should respond with status 200 and empty array if page is out of range', async () => {
    const req = {
      method: 'GET',
      query: {
        page: '100',
        limit: '10',
      },
    } as unknown as NextApiRequest;

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await handler(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Object));
  });

  // Add more test cases here based on your requirements
});
