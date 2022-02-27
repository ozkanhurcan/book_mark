cp .env.example .env
npm install 
npm i -g sequelize-cli
sequelize db:migrate
when migration complete, you can import the books.csv data

after that create a elasticsearch server then;
node src/commands/elasticMapping.command.js
node src/commands/elasticBulkIndex.command.js

then you can check http://localhost:3000

if you want to test the application with database, set the ELASTIC_ENABLE to false

DONE