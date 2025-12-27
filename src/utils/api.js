// const Base_URL = "https://expense-tracker-backend-1-emhh.onrender.com";
const Base_URL = "https://expense-tracker-backend-1-emhh.onrender.com";
export const apiFetch = async (URL, token, options = {}) => {
  const res = await fetch(`${Base_URL}${URL}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
};
