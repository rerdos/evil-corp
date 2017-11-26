import envConfig from 'envConfig';

const headers = new Headers();
headers.append('Cache-Control', 'max-age=600');

export default async function() {
  const response = await fetch(`${envConfig.endpoint}/data/report`, { headers });
  return response.json();
}