import express from 'express';
import bodyParser from 'body-parser';

const parties = require('./routes/parties');
const offices = require('./routes/offices');

const app = express();
const port = 3000 || process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/parties', parties);
app.use('/api/v1/offices', offices);

app.listen(port, () => {
  console.log(`Politico server listening on port ${port}!`);
});

export default app;
