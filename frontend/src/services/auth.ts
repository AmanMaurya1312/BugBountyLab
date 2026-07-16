import api from "./api";

export async function login(email: string, password: string) {
  return api.post("/login", {
    email,
    password,
  });
}

export async function register(
  email: string,
  password: string,
  fullName: string,
) {
  return api.post("/register", {
    email,
    password,
    full_name: fullName,
  });
}