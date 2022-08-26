import express from 'express';
import cors from 'cors';

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

const tweets = [];
const users = [];

server.post('/sign-up', (req, res) => {
  users.push(req.body);
  res.send('ok');
});

server.post('/tweets', (req, res) => {
  tweets.push(req.body);
  res.send('ok');
});

server.get('/tweets', (req, res) => {

  const lastTweets = [];

  for (let i = tweets.length - 1; i >= (tweets.length - 10); i--) {
    if (i < 0) {
      break;
    }
    const newTweetUser = users.find(value => tweets[i].username === value.username);
    const newTweet = { ...tweets[i], avatar: newTweetUser.avatar };
    lastTweets.push(newTweet);
  }
  res.send(lastTweets);
});


server.listen(port, () => {
  console.log(`Listen on ${port}`);
});