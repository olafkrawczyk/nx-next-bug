import { main } from '../server/server';

describe('Index', () => {
  it('inits custom server for testing', async () => {
    const server = await main();
    expect(server).toBeTruthy();
  });
});
