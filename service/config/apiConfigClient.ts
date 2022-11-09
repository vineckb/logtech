import axios from "axios";
import nookies from "nookies";

export function APIClient(ctx?: any) {

  const api = axios.create({
    baseURL:'http://3.15.169.95:8081/v1/authorization'
  })

  return api
}