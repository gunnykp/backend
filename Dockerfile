FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# รันสคริปต์ seed ข้อมูล
CMD ["sh", "-c", "node dist/main.js & npx ts-node src/scripts/seed.ts"]
