import Mongoose from "mongoose";
import { logger } from "../utils/logger";
    
class Database {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    private _url: string;
    
    constructor (public url: string) {
      this._url = url;
      Database.connect(this._url);
    }
    
    static async connect (url:string): Promise<Mongoose.Connection> {
      if(this.mongooseInstance) return this.mongooseInstance;
      
      this.mongooseConnection  = Mongoose.connection;
      this.mongooseConnection.once("open", () => {
        logger.info('MongoDB database connected');
      });
      
      this.mongooseInstance = await Mongoose.connect(url);
      return this.mongooseInstance;
    }   
};

export default Database;