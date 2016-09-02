jest.disableAutomock();
import Waterline from 'waterline';
import mongoAdapter from 'sails-mongo';
import {User} from '../../src/models/user'

const dbTestConfig = { 
  adapters: {
    mongodb: mongoAdapter
  },
  connections: {
    mongo: { 
      "adapter": "mongodb",
      "host": "localhost",
      "database": "test",
      "port": 27017
    }
  }
};

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;

describe('null', () => {
    
  it('should be null', () => {
    expect(null).toBe(null);
  })
});
  

describe('query user', () => {
  let dbConnection;
  beforeEach((doneFn) => {
    const waterline = new Waterline();
    waterline.loadCollection(User)
    waterline.initialize(dbTestConfig, function(err, models) {
      if (err) return doneFn(err);
      dbConnection = models;
      doneFn();
    });
  });
    
  it('should have model', () => {
    expect(dbConnection).toBeDefined();
  })

  
  it('dbTestConfig', () => {
    expect(dbTestConfig).toBeDefined();
  });
    
});
  