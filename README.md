# Back_End

# Celebrity Dead or Alive 

### Backing You Up: 

| [**Joshua Stevens**] (https://github.com/justspokencodes) | [**Robert Gant**] 
(https://github.com/gant123) |
|:----------------------------------------------------:	|:---------------------------------------------:	|

# Table of Contents 
- [The Work](#the-work)
    - [Back End](#backend-built)
- [So Why Did We Chose These Stack](#so-why-stack)
    - [Heroku](#heroku)
    - [Express/Node](#express-node)
- [Testing](#testing)
- [Intall Like This...](#install-like-this)
    - [Using The App](#using-the-app)
- [Database in Development](#database)
    - [Development](#development)
    - [Data Models](#data-models)
        - [User Table](#user-table)
        - [Celebs Table](#celeb-table)
- [Authentication](#authentication)

## The Work

#### Backend Built: 

- Bcryptjs 
    - [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- sqlite 
    - [sqlite3](https://www.npmjs.com/package/sqlite3)
- Knex
    - [knex](https://github.com/tgriesser/knex)
- Express
    - [express](https://expressjs.com/en/starter/installing.html)
- Heroku
    - [http://www.heroku.com](http://www.heroku.com)

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p> 

#### So Why Did We Chose These Stack 

##### Heroku 
- Heroku intergrates with Github so it provides continious deployment, if needed.

##### Express-Node 
- Reliable documentation, good performace within the project.

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

### Testing 

Testing of this application was completed through many stages of development when bieng build using termincal logging and Postman.

Testing was done by both contributors within  the develpment of this application by each contributor submitting a pull request to the masterbranch and after each merge all elements were working together properly.

The application was set up to continously deploy to Heroku. To make sure it continously deploys, our master branch was automatcally checked upon every pull request to make sure the new code would not break the build.

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

### Install Like This 

#### Using The Application 

Requirements: 
- Node 
- Package Manager (such as Yarn or npm)
    - [**Yarn**](https://yarnpkg.com/en/) was used to build this project.

Have Node? Have **Yarn** or **npm**? 
Follow these steps: 

1. [ ] Create a forked copy of this project.
2. [ ] Clone your forked version of the Repository.
3. [ ] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
4. [ ] Implement the project on this Branch, committing changes regularly.
5. [ ] Push commits: git push origin `firstName-lastName`
6. Open terminal and `cd` into the server folder and run `yarn install` to install the neccessary node_modules on the backend.
7. Run `yarn start` on the server folder to run the backend on `localhost:5000`
8. Your application should be running and be tested locally.

<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

* #### Database in Development

    - #### Development 
        - Development database setup:
            ```

            development: {
                client: 'sqlite3',
                useNullAsDefault: true,
                connection: {
                filename: './database/celeb.db3'
                },
                pool: {
                afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done);
                }
                },
                migrations: { directory: './database/migrations'},
                seeds: { directory: './database/seeds'}
            }, 
            ```
        <p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

    - #### Data Models

        - #### Users Table 
            * The ‘users’ table stores the profile of the user. Once thats done, a users row will be created once the ‘Log In’ line is put in for saved results.

            ```js

            return knex.schema.createTable('users', users => {
                users.increments(); // primary key 

                users.string('username', 128).unique(); // username field
                users.string('password', 128).notNullable(); // password field
                users.string('email', 256).unique(); // email field 
    })
    ```
<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

- ##### Celebs Table 

    * The celebs table contains the information of the celebrity and how long it took them to finish the quiz.

        ```js

            return knex.schema..createTable('celebs', celebs => {
                celebs.increments(); // 
                celebs.string('celebs_name', 128);
                celebs
                .integer('celebs_age')
                .unsigned()
                .notNullable();
                celebs.integer('time_limit');

    });
    ```
<p align="center"><a href="#table-of-contents"><strong>Back To Top</strong></a></p>

- ##### Authencation 
    * This application uses JSON Web Tokens (JWT) and Bcrypt to secure the log in password and username. This is in the code because it adds security to the log in process. 