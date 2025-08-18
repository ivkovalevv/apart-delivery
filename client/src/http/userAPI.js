import { $host, $authHost } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", { 
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { 
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  if(!data) return

  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const update = async (id, userName, userTel) => {
  const { data } = await $authHost.post("api/user/update", {
    id,
    userName,
    userTel,
  });
  if(!data) return

  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
