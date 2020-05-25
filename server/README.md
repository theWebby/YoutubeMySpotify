# Server 
Purely for authentication. Hosted somewhere in the clouds.

## Start Server

```js
SPOTIFY_CID=spotify_cid SPOTIFY_SECRET=spotify_secret node app
```

### Docker
docker build --tag yms-server:1.0 .
docker run --rm -p 3000:3000 yms-server

____
docker run --rm -it -v ~/testSSL:/root/testSSL:ro -p 3000:3000

 - `--rm` -> Deletes instance when it is stopped
 - `-it` -> Makes container like a terminal session
 - `-v` -> Mount volume
 - `../:ro` -> Read only
 - `-p` -> Map ports (publish ports)