var koa = require('koa');
var koaPg = require('koa-pg');

var app = koa();

app.use(koaPg('postgres://stephaniebeaton:@localhost:5432/bookstore'));

// app.use(koaPg('postgres://user:password@localhost:5432/database'));

// http://www.neilconway.org/docs/sequences/

// CREATE TABLE "books" (
//   "id" integer NOT NULL,   <==  should have said  "id" SERIAL here to get a sequence
//   "title" text NOT NULL,
//   "author_id" integer,
//   "subject_id" integer,
//   Constraint "books_id_pkey" Primary Key ("id")
// );

//  how to manually select the next sequence value
// SELECT currval(pg_get_serial_sequence('books', 'id'));
// SELECT currval(books_id_pkey);


app.use(function *(next) {
    // Here we have access to this.pg.db.client which is client returned from pg.connect().
    // var result = yield this.pg.db.client.query_('SELECT now()');
    // var result = yield this.pg.db.client.query_('SELECT * FROM books');

    // var result = yield this.pg.db.client.query_('SELECT * FROM books WHERE id = $1', [7808]);

    // var result = yield this.pg.db.client.query_('UPDATE books SET title = $1 WHERE id = $2', ['Rosemarys Baby', 7808]);

    var book_id = 41479;     // <===  we would not have to give this column in an INSERT if column was sequence.
    var title = 'Test Lighthouse Labs final project';
    var author_id = 4156;
    var subject_id = 9;

    //   INSERT INTO books (title, author_id, subject_id) VALUES ('Test Lighthouse Labs final project', 4156, 9)

    // var result = yield this.pg.db.client.query_('INSERT INTO books (id, title, author_id, subject_id) VALUES ($1, $2, $3, $4)', [book_id, title, author_id, subject_id]);

    var result = yield this.pg.db.client.query_('DELETE FROM books WHERE id = $1', [book_id]);

    console.log('result:', result);


    //
    //  MUST WRITE CODE TO TRAP DATABASE ERRORS HERE
    //

    // this.body = result.rows[0].now.toISOString();

    this.body = result.rows[0];
});

app.listen(3000);
