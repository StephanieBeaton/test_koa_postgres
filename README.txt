
install postgress locally

create bookstore database and load in data using this script

   https://gist.githubusercontent.com/kvirani/7742279/raw/bf24ac9bb25f2bfeb5200856a3c22f7733ef8e08/bookstore.sql



change this line in index.js    app.use(koaPg('postgres://stephaniebeaton:@localhost:5432/bookstore'));

   (replace   "stephaniebeaton" with a user for bookstore database )


npm install

node index.js
