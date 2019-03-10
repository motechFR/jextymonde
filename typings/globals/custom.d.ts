import * as jwt from 'jsonwebtoken';
import 'jest-extended';

declare module "jsonwebtoken" {
   function verify(
      token: string,
      secretOrPublicKey: string | Buffer,
      options?: jwt.VerifyOptions,
  ): any;
      
 }



 declare global {
   
   namespace jest {
     // tslint:disable-next-line:interface-name
     interface Matchers<R> {
       toMatchImageSnapshot(): R,
       toBeArray(): R,
       toBeString(): R,
       toBeObject(): R,
       toContainKeys(keys: Array<string>): R
     }
   }
 }