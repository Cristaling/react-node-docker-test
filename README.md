
# React App with Node.js backend dockerized

## Running the app

In order to run this repository, you would need to ahve docker installed.

After cloning, run the following commands in the root directory containing the docker-compose.yml:

```
docker-compose build
docker-compose up
```

You should be able to kill the containers with CTRL + C

Otherwise run ```docker-compose down```

## Using the app

After running the app, it should be available at ```http://localhost:3000```

> Be aware that on windows machines running WLS 2, you might need to configure docker for container binding to localhost.

After opening the app, you should be able to login with:
```
Username: admin
Password: password
```

The app will then show a generated line chart.