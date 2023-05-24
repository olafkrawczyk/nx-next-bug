import { main } from './server';

main()
  .then((server) => {
    // HTTP Server options:
    // - Feel free to change this to suit your needs.
    const hostname = process.env.HOST || 'localhost';
    const port = process.env.PORT ? parseInt(process.env.PORT) : 4200;
    server.listen(port, hostname);

    console.log(`[ ready ] on http://${hostname}:${port}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
