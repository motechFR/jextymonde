
import { connect } from 'mongoose';
import { config } from '../../config';

export function connectToDb(){
  return new Promise((resolve, reject) => {
    connect(config.mongoUrl, {useNewUrlParser: true})
    .then(() => {
      console.log("Database connection established")
      resolve();
    })
    .catch(err => {
      console.log(err)
      reject();
    });
    
    console.log(config.mongoUrl);
  
    // Insert ensureIndexes statement here

  })
}