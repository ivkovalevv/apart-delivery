import { $host, $authHost } from "./index";

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const fetchMenuItems = async () => {
  const { data } = await $host.get("api/menu-item"); 
  return data;
};
