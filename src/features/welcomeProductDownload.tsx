async function welcomeProductDownload() {
  const url =
    'https://my-json-server.typicode.com/DenisKa13051992/JSON-server-API-jewelry/welcomePage';
  const response = await fetch(url);

  const data = await response.json(); // читаем ответ в формате JSON

  console.log(data);
  return data;
}

export default welcomeProductDownload;
