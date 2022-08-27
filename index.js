import express from 'express';
import cors from 'cors';

const server = express();
const port = 5000;

server.use(cors());
server.use(express.json());

const tweets = [];
const users = [];

server.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }
  users.push(req.body);
  res.status(201).send('ok');
});

server.post('/tweets', (req, res) => {
  const username = req.headers.user;
  const { tweet } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios');
  }

  tweets.push({ username, tweet });
  res.status(201).send('ok');
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

server.get('/tweets/:username', (req, res) => {
  const requestedUser = req.params.username;
  console.log(requestedUser);
  let requestedTweets = [];

  requestedTweets = tweets.filter(tweet => tweet.username === requestedUser);
  console.log(requestedTweets);

  res.send(requestedTweets);
});


server.listen(port, () => {
  console.log(`Listen on ${port}`);
});