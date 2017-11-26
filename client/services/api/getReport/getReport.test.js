import getReport from './getReport.js';

const mockFetch = (data) =>
  global.fetch = jest.fn().mockImplementation(() =>
    new Promise((resolve, reject) => resolve(data)));

const successResponse = {
  ok: true,  
  json: () => [
    { x: 1, y: 2 },
    { x: 3, y: 4 }
  ]
};

describe('Service: report API', () => {
  it('returns a promise if success', function(done) {
    mockFetch(successResponse);
    getReport().then(data => {
      expect(data.length).toBe(successResponse.json().length);
      done()
    });
  });
});