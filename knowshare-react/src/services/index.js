import axios from "axios";

function createHeaders(contentType = "application/json", accessToken) {
  const headers = {
    "Content-Type": contentType,
    Accept: "*/*",
    "Access-Control-Allow-Headers": "*",
    ...(accessToken && { Authorisation: `${accessToken}` }),
  };

  return headers;
}

export default class Service {
  //   HOST = process.env.BACKEND_API_URL;
  HOST = "https://knowshare-backend-alx.vercel.app/";
  BASE_URL;

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getRequest(url = "", accessToken) {
    try {
      const headers = {
        ...createHeaders("application/json", accessToken),
        Authorisation: accessToken,
      };
      return await axios.get(`${this.HOST}${this.BASE_URL}/${url}`, {
        headers,
      });
    } catch (error) {
      return error;
    }
  }

  async postRequest(url, data, accessToken) {
    try {
      const headers = createHeaders("application/json", accessToken);

      return await axios.post(`${this.HOST}${this.BASE_URL}/${url}`, data, {
        headers,
      });
    } catch (error) {
      return error;
    }
  }

  async putRequest(url, data, accessToken) {
    try {
      const headers = createHeaders("application/json", accessToken);
      return await axios.put(`${this.HOST}${this.BASE_URL}/${url}`, data, {
        headers,
      });
    } catch (error) {
      return error;
    }
  }

  async patchRequest(url, data = {}, accessToken) {
    try {
      const headers = createHeaders("application/json", accessToken);
      return await axios.patch(`${this.HOST}${this.BASE_URL}/${url}`, data, {
        headers,
      });
    } catch (error) {
      return error;
    }
  }

  async deleteRequest(url, accessToken) {
    try {
      const headers = createHeaders("application/json", accessToken);
      return await axios.delete(`${this.HOST}${this.BASE_URL}/${url}`, {
        headers,
      });
    } catch (error) {
      return error;
    }
  }
}
