sudo docker stop $(sudo docker ps -a -q)
sudo docker build --tag yms-server:1.0 .
sudo docker run --rm -it -v ~/testSSL:/root/testSSL:ro -p 3000:3000 yms-server:1.0