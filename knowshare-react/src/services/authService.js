import config from "../config.json";
import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = config.apiUrl;
const tokenKey = "token";

export async function login(data) {
  console.log("data", data);
  return http.post(`${apiEndPoint}/login`, data);
}

export async function signup(data) {
  return http.post(`${apiEndPoint}/signup`, data);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  const token = localStorage.getItem(tokenKey);
  console.log(token, "token");
  if (localStorage.getItem(tokenKey)) {
    localStorage.removeItem(tokenKey);
  }

  // Check if a token exists before making the POST request
  if (token) {
    // Set the Authorization header with the Bearer token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // Make the POST request with the headers
    return http.post(`${apiEndPoint}/logout`, null, { headers });
  } else {
    // Handle the case when no token is found in localStorage
    // You might want to throw an error or handle it differently
    // Here, we return a promise that immediately resolves.
    return Promise.resolve();
  }
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const currentUser = jwtDecode(jwt);
    return currentUser;
  } catch (error) {}
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  loginWithJwt,
  getCurrentUser,
  getJwt,
  signup,
};
