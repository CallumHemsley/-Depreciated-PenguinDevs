FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
#The base node image sets a very verbose log level
ENV NPM_CONFIG_LOGLEVEL warn
ENV PATH /usr/src/app/node_modules/.bin:$PATH
#Make npm test run only once non-interactively
ENV CI=true

#skip npm install by copying package.json
ADD package.json /usr/src/app/package.json
#COPY package-lock.json package-lock.json
RUN npm install 
#Copy full workingg directory into workspace
#RUN npm install react-scripts@0.9.5 -g

CMD ["npm", "start"]