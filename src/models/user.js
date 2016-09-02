import Waterline from 'waterline'

export const User = Waterline.Collection.extend({

  identity: 'user',
  connection: 'mongo',

  attributes: {
    first_name: {
      type: 'string',
      defaultsTo: null
    },
    last_name: {
      type: 'string',
      defaultsTo: null
    },
    avatar: {
      type: 'string',
      defaultsTo: null
    },
    locale: {
      type: 'string',
      defaultsTo: null
    },
    timezone: {
      type: 'string',
      defaultsTo: null
    },
    gender: {
      type: 'string',
      defaultsTo: 'unknown'
    } 
  },
  beforeCreate: (attrs, next) => {
    if (!attrs.gender) attrs.gender = 'unknown';
    next();
  }
});
