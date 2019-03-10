import { demoController } from '../src/controllers/demoController';

import { sampleData} from './mockData';
import { responses } from './predicates';
import { loadRoutes } from '../src/routes/routeIndex';
const app = require('../app').app;

loadRoutes(app);

// Mock libraries for content
import request = require('supertest');

// -----------------
describe('code_01',  () => {
    
    it('responds with json and 200 code', (done) => {
       request(app)
        .post('/api/demo/getAnswer')
        .expect('Content-Type', /json/)
        .expect(200, done)

    }, 5000)
})
