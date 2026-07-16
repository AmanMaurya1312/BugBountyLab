import api from "./api";

export async function getEmployees() {
  return api.get("/employees");
}