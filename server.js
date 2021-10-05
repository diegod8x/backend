import express from 'express';
import cors from 'cors';
import routes from './routes/dummy.route.js';

const app = express();

app.use(cors())

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT')
  next()
});

app.use(express.json())

app.use('/', routes)

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port ' + listener.address().port)
})