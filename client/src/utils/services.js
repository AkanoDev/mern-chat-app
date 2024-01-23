//HTTP REQUEST
export const baseURL = 'http://localhost:5000/api';

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body,
  });
  const data = await response.json();
  //check if the response is okay before return the data

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};
