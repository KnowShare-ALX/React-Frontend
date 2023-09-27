import config from "../config.json";
import http from "./httpService";

const apiEndPoint = config.apiUrl;
const tokenKey = "token";

export async function saveProfilePhoto(data) {
  const token = localStorage.getItem(tokenKey);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  if (token) {
    return http.post(`${apiEndPoint}/settings/profilePicture`, data, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export async function getProfile(emailId) {
  const token = localStorage.getItem(tokenKey);
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };
  if (token) {
    return http.get(`${apiEndPoint}/user/${emailId}/profile`, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export async function getProfilePicture(userId) {
  return http.get(`${apiEndPoint}/user/profilePicture/${userId}`);
}

export async function updateProfile(data) {
  const token = localStorage.getItem(tokenKey);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  if (token) {
    return http.put(`${apiEndPoint}/settings/profile`, data, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export async function uploadContent(data) {
  const token = localStorage.getItem(tokenKey);
  const headers = {
    "Content-Type": "multipart/form-data",

    Authorization: `Bearer ${token}`,
  };
  if (token) {
    return http.post(`${apiEndPoint}/contents/upload`, data, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export async function createCourse(data) {
  const token = localStorage.getItem(tokenKey);
  const headers = {
    "Content-Type": "application/json",

    Authorization: `Bearer ${token}`,
  };
  if (token) {
    return http.post(`${apiEndPoint}/courses/create`, data, {
      headers,
    });
  } else {
    return Promise.resolve();
  }
}

export default {
  getProfile,
  saveProfilePhoto,
  getProfilePicture,
  updateProfile,
  uploadContent,
  createCourse,
};
