/*
 * Package Import
 */
import { should } from 'chai';
import request from 'supertest';

/*
 * Local Import
 */
import server from 'src/server';

/*
 * Init
 */
should();

/*
 * Tests
 */
describe('** Controllers - Index **', () => {
  it('should return 302', (done) => {
    request(server).get('/fake/route').expect(302, done);
  });
});
