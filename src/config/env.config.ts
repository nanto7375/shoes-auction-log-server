import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const envConfig = {
  // env
  env: process.env.ENV,
  
  // port
  port: process.env.LOG_PORT || 3003,

  // db
  mongodbUser: process.env.MONGO_DB_USER,
  mongodbPassword: process.env.MONGO_DB_PASSWORD,
  
  // another server url
  authServer: process.env.AUTH_SERVER_ADDRESS,
  userServer: process.env.USER_SERVER_ADDRESS,
  productServer: process.env.PRODCUT_SERVER_ADDRESS,
  logServer: process.env.LOG_SERVER_ADDRESS,

  // mq
  // mqServerAddress: process.env.MQ_SERVER_ADDRESS,
  // mqServerQueueName: process.env.MQ_SERVER_QUEUENAME,
};

export default envConfig;
