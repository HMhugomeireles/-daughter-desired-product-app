import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9901",
});

export default api;

const DEFAULT_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  timeout: 60000,
};

export function resolveHeader(extraConfig) {
  if (typeof extraConfig === "object") {
    return {
      ...DEFAULT_HEADERS,
      ...extraConfig,
    };
  }
  return {
    ...DEFAULT_HEADERS,
  };
}