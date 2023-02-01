import axios from 'axios';
import { type Props } from '@/pages';

const apiKey = process.env.API_KEY as string;
const baseURL = process.env.BASE_URL as string;

export const getPopularData = async (): Promise<Props> => {
  const res = await axios.get(`${baseURL}/popular`, {
    headers: {
      'Content-Type': 'application/json',
      apiKey,
    },
  });

  return res.data;
};

export const getEthData = async (): Promise<Props> => {
  const res = await axios.get(`${baseURL}/eth-price`, {
    headers: {
      'Content-Type': 'application/json',
      apiKey,
    },
  });

  return res.data;
};
