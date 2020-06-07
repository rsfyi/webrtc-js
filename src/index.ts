import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (_, res) => res.render('index.ejs'));

app.listen(3000, () => {
  console.log(`Server is running at the port 3000`);
});
