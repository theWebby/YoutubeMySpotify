sudo docker stop $(sudo docker ps -a -q)
sudo docker build --tag yms-server:1.0 .
sudo docker run --rm -it -v /etc/letsencrypt/live/youtubemyspotify.uk/:/data:rw -p 3000:3000 -p 443:443 --entrypoint /bin/bash yms-server:1.0