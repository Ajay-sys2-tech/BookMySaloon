import express from 'express';
const app = express();
import bodyParser from'body-parser';
app.use(bodyParser.json()); // support json encoded bodies
const port = process.env.PORT || 3001;

import 'dotenv/config';

app.get('/', (req, res) => res.send("Hello World"));




app.listen(port, () => {
    console.log(`app started listening at port no. ${port}`);
});