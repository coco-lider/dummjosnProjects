import axios from 'axios'
import { AirVent } from 'lucide-react';

export const api = axios.create({
    baseURL:'https://dummyjson.com',
    timeout:5000,
    headers:{
        "Content-Type":"application/json"
    }
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        } 
        return config
    },
    (error) => Promise.reject(error),
)

export const getProducts = async ({ queryKey }) => {
  const [, { limit, skip }] = queryKey;
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const getSingleProduct = async ({ queryKey }) => {
  const [, id] = queryKey;
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const getProductsCategory = async () => {
  const res = await api.get("/products/categories")
  return res.data.slice(0,10)
}