import mongoose from "mongoose";
import envConfig from "../config/env.config";

const { mongodbUser, mongodbPassword } = envConfig;

const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@shoesauction.q6inieh.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect( uri, {}, ( error ) => {
  if ( error ) {
    console.log( error );
  }
  console.log( 'mongoDb connected' );
});
