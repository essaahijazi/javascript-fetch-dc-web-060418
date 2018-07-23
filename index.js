const app = "I don't do much.";
const token = '014220aafb19bcdf5420c17328cfb5d08ba04245';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
