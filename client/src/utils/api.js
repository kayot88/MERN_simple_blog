const baseUrl = 'http://localhost:4000/api';

const methods = {
  post: async function(endpoint, body, token = null) {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` })
      }
    };
    console.log('start fetch');
    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();
    if (!response.ok) {
      if (response.status === 423) {
        Object.keys(json).forEach(key => {
          throw Error(json[key]);
        });
      }
      throw Error(json.message);
    }
    return json;
  }
};

export async function register(username, password, email) {
  const json = await methods.post('auth/register', {
    username,
    password,
    email
  });
  return json.token;
}
export async function login(username, password) {
  const json = await methods.post('auth/login', { password, username });
  return json.token;
}
