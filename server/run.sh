sudo docker stop $(sudo docker ps -a -q)
sudo docker build --tag yms-server:1.0 .
sudo docker run --rm -it --mount type=bind,source=/etc/letsencrypt/live/youtubemyspotify.uk,target=/data -p 3000:3000 -p 443:443 --entrypoint /bin/bash yms-server:1.0
