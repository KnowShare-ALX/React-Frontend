import config from "../config.json";
import jwtDecode from "jwt-decode";
import http from "./httpService";

const apiEndPoint = config.apiUrl;
const tokenKey = "token";
const token = localStorage.getItem(tokenKey);

const headers = {
  Authorization: `Bearer ${token}`,
};

export async function saveProfilePhoto(data) {
  if (token) {
    return http.post(`${apiEndPoint}/settings/profilePicture`, data, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export default {
  saveProfilePhoto,
};
