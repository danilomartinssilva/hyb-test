import axios from 'axios'
const DEFAULT_API_CONFIG = {url:'https://gsb-new-onboarding-api-gateway.herokuapp.com'}

const api = axios.create({
  baseURL:DEFAULT_API_CONFIG.url,
  timeout: 180000
})

const timeout = (error:any) => {
  if (error && 'code' in error && error.code === 'ECONNABORTED') {
    error.message = 'Conexão interrompida tente novamente mais tarde.';
  }

  return error;
};

api.interceptors.response.use((config)=>config,(error)=>Promise.reject(timeout(error)))

export default api;