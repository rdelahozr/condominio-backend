import app from './app.js'
import './database.js'
import 'dotenv/config'

const port = process.env.PORT || 3010;

app.listen(port) ;
console.log(`server on port ${port}`);
