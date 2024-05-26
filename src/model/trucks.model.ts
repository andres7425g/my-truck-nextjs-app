export interface responseTrucks {
  page: number;
  totalPages: number;
  items: Trucks[];
}

export interface Trucks {
  locationid: string;
  Applicant: string;
  FacilityType: string;
  cnn: string;
  LocationDescription: string;
  Address: string;
  blocklot: string;
  block: string;
  lot: string;
  permit: string;
  Status: string;
  FoodItems: string;
  X: string;
  Y: string;
  Latitude: string;
  Longitude: string;
  Schedule: string;
  dayshours: string;
  NOISent: string;
  Approved: string;
  Received: string;
  PriorPermit: string;
  ExpirationDate: string;
  Location: string;
  'Fire Prevention Districts': string;
  'Police Districts': string;
  'Supervisor Districts': string;
  'Zip Codes': string;
  'Neighborhoods (old)': string;
}
