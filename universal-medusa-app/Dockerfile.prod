FROM node:18.17.1

WORKDIR /app/medusa

COPY package.json .

RUN apt-get update

RUN apt-get install -y python-is-python3

RUN npm install -g npm@latest

RUN npm install -g @medusajs/medusa-cli@latest

RUN npm install --loglevel=error

# COPY --chmod=777 . .
COPY . .

ENTRYPOINT ["/bin/sh", "./develop.sh"]
# ENTRYPOINT ["medusa", "develop"]