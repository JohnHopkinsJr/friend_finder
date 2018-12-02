# Friend Finder


## How to Run

`git clone git@github.com:_______________`
`npm install`
cd `friend finder` 
`git init; git add .; git commit -m "final"`
Type `heroku login` to log in to your Heroku account. Then, type `heroku create` to create a Heroku app.

6. Finally, type `git push heroku master` to build the app. You can find the URL at the end.npm install


## How to Configure Database

To use your own database, you will also need [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

1. On Heroku, you can use either [ClearDB](https://devcenter.heroku.com/articles/cleardb) or [JawsDB](https://devcenter.heroku.com/articles/jawsdb). Both provide a free-tier option.

For JawsDB, type `heroku addons:create jawsdb`, then `heroku config:get JAWSDB_URL` to find (in the order of appearance) your username, password, hostname, port number, and default schema.

![How to Configure Database: Step 1](readme/how_to_configure_database_step1.png?raw=true)

2. Open the file `app/data/friends.js`, change the values on lines 13 - 17, and type `git push heroku master` in Bash to apply the changes.

![How to Configure Database: Step 2](readme/how_to_configure_database_step2.png?raw=true)

3. To seed your database, open MySQL Workbench and click Setup New Connection.

![How to Configure Database: Step 3a](readme/how_to_configure_database_step3a.png?raw=true)

Enter your username, hostname, port number, and default schema. Once you click on OK, you will be asked for the password.

![How to Configure Database: Step 3b](readme/how_to_configure_database_step3b.png?raw=true)

4. Finally, connect to your database and run `app/data/friend_finder_db.sql`.

![How to Configure Database: Step 4](readme/how_to_configure_database_step4.png?raw=true)