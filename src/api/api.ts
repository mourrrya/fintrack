import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhbmlsIiwiaWF0IjoxNzE2MjMxNDcwLCJleHAiOjE3MTYyMzUwNzB9.unXesm41ygSkL3j9w8cLZOvZd8zSz7lEdSwV0VfBefg";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "",
  headers: { Authorization: `Bearer ${token}` },
});
