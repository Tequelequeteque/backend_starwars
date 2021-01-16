import getApi from './api';

(async () => {
  const SERVER_PORT = Number(process.env.SERVER_PORT);
  const api = await getApi();
  api.listen(SERVER_PORT);
  console.log(`API running on port ${SERVER_PORT}`);
})();
