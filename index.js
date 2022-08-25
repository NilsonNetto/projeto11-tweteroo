import express from 'express';
import cors from 'cors';
import { format } from 'path';

const server = express();
server.use(cors());

const tweets = [{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub1"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub2"
},
{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub3"
}];

const users = [
  {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  }
];

server.post('/sign-up', (req, res) => {

  res.send('ok');
});


server.post('/tweets', (req, res) => {

  res.send('ok');
});

server.get('/tweets', (req, res) => {
  const lastTweets = [];

  for (let i = tweets.length - 1; i >= (tweets.length - 10); i--) {
    if (i < 0) {
      break;
    }
    lastTweets.push(tweets[i]);
  }
  res.send(lastTweets);
});




server.listen(5000, () => {
  console.log('listen on 5000');
});