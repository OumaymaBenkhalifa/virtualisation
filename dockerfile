# Base image
FROM node:alpine

# Specify working directory
WORKDIR C:\Users\hp\virtualisation

# Install dependencies
COPY ["package.json", "./"]
RUN yarn install

# Copy project files
COPY . .

CMD ["node", "src/app.js"]
EXPOSE 3000

#docker tag local-image:tagname new-repo:tagname
#docker push new-repo:tagname