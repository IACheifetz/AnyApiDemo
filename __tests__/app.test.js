const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { jobs } = require('../data/jobs');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/jobs should return a list of jobs', async () => {
    const res = await request(app).get('/jobs');
    const expected = jobs.map((job) => {
      return { id: job.id, name: job.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/jobs/:id should return job detail', async () => {
    const res = await request(app).get('/jobs/1');
    const gladiator = {
      id: '1',
      name: 'Gladiator',
      type: 'tank',
      armor: 'fending',
      minlevel: 1,
      requiresexpansion: false,
    };
    expect(res.body).toEqual(gladiator);
  });

  afterAll(() => {
    pool.end();
  });
});
