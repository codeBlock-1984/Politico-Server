import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3000 || process.env.port;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log(`Politico server listening on port ${port}!`);
});
