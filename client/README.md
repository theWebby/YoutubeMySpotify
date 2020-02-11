# Client
Electron app to be packaged and downloaded on the client machine.

Based on the spike, youtube allowes all videos to be played on youtube or localhost. Therefor this electron app will run a server
on localhost:3000 and make only authentication requests with the cloud server.

## Client Responsibilities

1. The client will authenticate with the auth server to obtain spotify access and refresh tokens.
2. The client will poll the users currently playing song.
3. The client will search the name of that song on youtube and play the first video from the results list.


## Building the Client

```bash
electron-builder .
```

## Signing the Build
#### MacOS
Using AppleID, generate a developer signing key with XTerm.

[Then build the client.](#building-the-client)


#### Windows

Coming soon