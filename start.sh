#!/bin/bash

[ ! -d ./node_modules ] && npm install
chmod +x wait-for-it.sh
docker-compose up

# Checking docker & folder nab-test
# if [ -x "$(command -v docker)" ] && [ ! -d "/nab-test" ]
# then
#     echo "[x] Cloning process..."
#     git clone https://github.com/transybao1393/nab-test.git
#     echo "[x] Installing packages..."
#     cd nab-test
#     npm install
#     echo "[x] Granted permission for wait-for-it.sh file..."
#     chmod +x wait-for-it.sh
#     # Creating network
#     echo "[x] Create docker network and start docker-compose..."
#     docker network create bao_network
#     docker-compose up
# else
#     echo "Please first install docker using Homebrew (if you are using Mac)"
#     echo "Following steps will be list at: https://codingbee.net/docker/install-docker-for-mac-using-homebrew"
# fi

# # Check if nab-test folder is exist
# if [ -d "/nab-test" ]
# then
#     cd nab-test
#     npm install
#     echo "[x] Granted permission for wait-for-it.sh file..."
#     chmod +x wait-for-it.sh
#     # Creating network
#     echo "[x] Create docker network and start docker-compose..."
#     docker network create bao_network
#     docker-compose up
# fi