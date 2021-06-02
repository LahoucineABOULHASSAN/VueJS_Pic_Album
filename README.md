# FS Capstone Project API backEnd

backEnd Url: https://picalbum-api.herokuapp.com/
frontEnd Url:https://picalbum.app.netlify.com/

## Getting Started

This app is a photos api build with flask framework, it has also a frontEnd, build with vue js, totally separated from the backend part.
The front connects with the backEnd using axios https requests.

### Installing Dependencies

Follow instructions to install the latest version of the Dependencies used for this project.
each one is like described below:

#### Python 3

To Install Python for your platform, Check here:
[python docs](https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python).

#### PostgreSQL

To install PostgreSQL for your platforme, check here:
[PostgreSQL](https://www.postgresql.org/).

#### Virtual Enviornment

I recommend working within a virtual environment whenever using Python for projects.
This keeps your dependencies for each project separate and organaized.
Instructions for setting up a virual enviornment for your platform can be found [here](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

#### PIP Dependencies

Once you have your virtual environment setup and running, install dependencies by naviging to the `/backEnd` directory and running:

\$> `pip3 install -r requirements.txt`

This will install all of the required packages included within the `requirements.txt` file.

##### Key Dependencies

[Flask](http://flask.pocoo.org/):
is a lightweight backEnd microservices framework. Flask is required to handle requests and responses.

[SQLAlchemy](https://www.sqlalchemy.org/):
is the Python SQL toolkit and ORM we'll use handle the lightweight sqlite database. You'll primarily work in app.py and can reference models.py.

[Flask-CORS](https://flask-cors.readthedocs.io/en/latest/#):
is the extension we'll use to handle cross origin requests from our frontend server.

### Database Setup

This app use a relational database management system which is 'PostgreSQL'.
create a database : \$> `createdb -U postgres capstone`

With Postgres running, restore a database using the capstone.psql file provided.
From the backEnd folder in terminal run: \$> `psql capstone < capstone.pgsql`

### setup Authenthication ENV vars

Inside the 'setup.sh' file make sure you update the following ENV key:

DATABASE_URL: The database url.

### Running the server locally

First make sure to change the DATABASE_URL in 'setup.sh' file to be your Database URL.
From within the `backEnd` directory first ensure you are working using your created virtual environment.
To run the server, execute this commands:

source setup.sh
python app.py

The setup.sh file contains some bash commands to set the virtual envirement automatically.

### Hosting the App

This app is hosted on [Heroku]: https://www.heroku.com/
To host the app you need to register on heroku and install the Heroku cli, (you can find it in the website)

#### Create the app on heroku

cd in the backEnd folder
Then run the following commands:

    $ heroku login
    $ heroku create name_of_application

The command above return a heroku_git_url copy it to use it below

    $ git remote add heroku 'heroku_git_url'

#### Create Postgres database on heruko

After we need to add postgres add on for our database:

    $ heroku addons:create heroku-postgresql:hobby-dev --app name_of_application

Run this command to get the Database url created for us to set it in the 'setup.sh' file:

    $ heroku config --app name_of_your_application

Go fix our configurations in Heroku
In the browser, go to your Heroku Dashboard and access your application's settings.
Reveal the config variables and start adding all the required environment variables for the project.
same one in the 'setup.sh' file
For the purposes of the sample project, just add one additional one - 'EXCITED' and set it to true or false in all lowercase.

#### Push the app to heroku

Then push the app to heroku after commiting all the changes:

    $ git add .
    $ git commit -am "make it better"
    $ git push heroku master

#### Run migrations

Once your app is deployed, run migrations by running:

    $ heroku run python manage.py db upgrade --app name_of_application

If you find any troubles you can visit the links below:

    https://devcenter.heroku.com/categories/deployment
    https://devcenter.heroku.com/articles/getting-started-with-python

## Documentation

'/'
returns json value:
{
"message": "welcome to our photos api app, Please go the - /photos - url to get the data",
"success": true
}

### Endpoints

#### overview

    [METHOD]:               (endpoint)

    [GET,POST]:             ('/photos')
    [GET,PATCH,DELETE]:     ('/photos/<id>')
    [POST]:                 ('/photos/search')

#### request and response

##### GET '/photos'

- Function:
  returns a dictionary of list of objects (photos ), success value, and total number of photos

- Request Example:
  curl -H "Accept: application/json" -H "Content-Type: application/json" http://127.0.0.1:5000/photos

- Response Example:

```
{
  "photos": [
    {
      "categories": ["Beauty"],
      "description": "a lady from Thailand",
      "id": 7,
      "url": "https://firebasestorage.googleapis.com/v0/b/reactuploadingimages.appspot.com/o/images%2F15886789609220190228_060656.JPG?alt=media&token=ec6127f8-2f2e-48aa-acc9-148064e4424f",
      "owner": "auth0|5e8dc1bc885ec20cd175fc3b",
      "posted_time": "Tue, 05 May 2020 11:42:49 GMT",
      "rating": 5.0,
      "title": "Thai Lady"
    },
    {
      "categories": ["Portrait","Wildlife"],
      "description": "old man going to work from Algeria",
      "id": 6,
      "url": "https://firebasestorage.googleapis.com/v0/b/reactuploadingimages.appspot.com/o/images%2F158867869851400old-man.jpg?alt=media&token=eeb2f259-36a8-4c55-aaa7-555dc71ad971",
      "owner": "auth0|5e8dc1bc885ec20cd175fc3b",
      "posted_time": "Tue, 05 May 2020 11:38:37 GMT",
      "rating": 3.0,
      "title": "old man"
    }
  ],
  "success": true,
  "totale_photos": 2
}
```

##### GET '/photos/<id>'

- Function:
  returns a dictionary of object photo, success value.
- Request Example:
  curl -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:5000/photos/7

- Response Example:

```
{
  "photo": {
    "categories": ["Landscape","Beauty"],
    "description": "lorem ipsum desc",
    "id": 7,
    "url": "https://firebasestorage.googleapis.com/v0/b/reactuploadingimages.appspot.com/o/images%2F15886789609220190228_060656.JPG?alt=media&token=ec6127f8-2f2e-48aa-acc9-148064e4424f",
    "owner": "auth0|5e8dc1bc885ec20cd175fc3b",
    "posted_time": "Tue, 05 May 2020 11:42:49 GMT",
    "rating": 5,
    "title": "ice again"
  },
  "success": true
}
```

##### POST '/photos'

- Function:
  Creates a new photo using the submitted photo.
  Returns the created photo's id, success value.

- Request Example:
  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{
  "categories": "{Landscape,Beauty}",
  "description": "test",
  "url": "https://url.com",
  "owner": "username|5e8dc1bc885ec20cd175fc3b",
  "title": "ice again"
  }' http://127.0.0.1:5000/photos

- Response Example:
  {
  "created": 1,
  "success": true
  }

##### POST '/photos/search'

- Function:
  searches in database for photos that contains the find term in title,
  Returns list of match photos, succes value, and total of found results.

- Request Example:
  curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -d '{"title":"a"}' http://127.0.0.1:5000/photos/search

- Response Example:

```
{
  "photos": [
    {
      "categories": ["Beauty"],
      "description": "lorem desc",
      "id": 7,
      "url": "https://unsplash.com",
      "owner": "username|5e8dc1bc885ec20cd175fc3b",
      "posted_time": "Tue, 05 May 2020 11:42:49 GMT",
      "rating": 5.0,
      "title": "a title"
    },
    {
      "categories": ["Portrait","Wildlife"],
      "description": "Lorem desc",
      "id": 6,
      "url": "https://unsplash.com",
      "owner": "username|5e8dc1bc885ec20cd175fc3b",
      "posted_time": "Tue, 05 May 2020 11:38:37 GMT",
      "rating": 3.0,
      "title": "a second title"
    }
  ],
  "success": true,
  "totale_photos": 2
}
```

##### DELETE '/photos/<id>'

- Function:
  Deletes the photo of the given id if it exists.
  Returns the id of the deleted photo, success value.

- Request Example:
  curl -H "Accept: application/json" -H "Content-Type: application/json" -X DELETE http://127.0.0.1:5000/photos/1

- Response Example:

```
{
    "deleted": "1",
    "success": true
}
```

##### PATCH '/photos/<id>'

- Function:
  Updates the title of a specific photo.
  Returns the Updated photo's id, success value.

- Request Example:
  curl -X PATCH -H "Accept: application/json" -H "Content-Type: application/json" -d '{"title":"new title"}' http://127.0.0.1:5000/photos/1
- Response Example:

```
{
    'success': True,
    'updated': 1
}
```

### Errors

Errors are returned as JSON objects in the following format:

    ```
    {
        "success": False,
        "error": 400,
        "message": "bad request"
    }
    ```

The backEnd return three error types when requests fail:

- 400: Bad Request
- 404: Resource Not Found
- 405: method not allowed
- 422: Not Processable

### Testing

To run the tests make sure you re using your virtual envirement workspace,
change the `DATABASE_TEST_URL` to your database testing url, and `PHOTO_TEST_ID` some elemnt id that you inserted on your photos collection, so that the tests works properly.
then run the following commands

just make sure you run `$ source setup.sh`

```
  dropdb db-test
  createdb db-test
  psql -U postgres db-test < mydb.pgsql
  python test.py
```

# picalbum

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
