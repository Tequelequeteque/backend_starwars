import getApi from './api';

(async () => {
  const api = await getApi();
  const SERVER_PORT = Number(process.env.SERVER_PORT);
  api.listen(SERVER_PORT);
  // eslint-disable-next-line no-console
  console.info(`API running on port ${SERVER_PORT}`);
})();
