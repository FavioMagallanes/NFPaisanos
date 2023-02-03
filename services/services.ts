import axios from 'axios';
import { type Props } from '@/pages';

const apiKey = process.env.API_KEY as string;
const baseURL = process.env.BASE_URL as string;

export const getAuctionData = async (): Promise<Props> => {
  const res = await axios.get(`${baseURL}/popular`, {
    headers: {
      'Content-Type': 'application/json',
      apiKey,
    },
  });

  return res.data;
};

export const getEthPriceData = async (): Promise<Props> => {
  const res = await axios.get(`${baseURL}/eth-price`, {
    headers: {
      'Content-Type': 'application/json',
      apiKey,
    },
  });

  return res.data;
};

export const getFilterData = async (): Promise<Props> => {
  const res = await axios.get(`${baseURL}/aunctions`, {
    headers: {
      'Content-Type': 'application/json',
      apiKey,
    },
  });

  return res.data;
};
