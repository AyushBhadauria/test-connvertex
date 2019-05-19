import * as express from "express";
import * as bodyParser from "body-parser";
import {fetchData, saveData} from './controller/fetch.controller';
import * as cors from 'cors';
class App {

  constructor() {
    this.app = express();
    this.config();
    this.mountRoutes();
  }

  public app: express.Application;
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  
  }
  private mountRoutes (): void {
    const router = express.Router()
    this.app.use('/', router)
    router.get('/api/initialvalues', fetchData)
    router.post('/api/savevalues', saveData)
  }
}

export default new App().app;