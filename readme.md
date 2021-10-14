# Microservices using NodeJs and Reacts
This project serves as blog example to demonstrate miscroservices architecture and how to solve problems decoupling in the backend.

## Overview
- Our software dives into the usage of the event bus structure to decouple microservices.
- It uses NodeJs as backend architechture with express framework
- It uses ReactJs as the Frontend 

## Tools Used
- npm
- Javascript 
- NodeJs
- express framework
- reactJs
- in memory database to store data
- we are using mocha and chai as the test library



## How To run the application
to run the microservices in development mode go to each corresponding folder:
```bash
npm start:dev
```
to run the react app in development mode go to each corresponding folder:
```bash
npm start
```

to test the microservices/react app in development mode go to each corresponding folder:
```bash 
npm test
```

to run the app run:
```bash
//TODO
```

## SonarQube Linting
please note that you need to have sonarQube installed on your machine
more details : https://www.sonarqube.org/
```bash
mvn sonar:sonar -Dsonar.projectKey=de.iplytics.codingchallenge_backend_webapp -Dsonar.host.url=http://localhost:9000 -Dsonar.login=54db2a4cf71d61a01d01a61fa108c571946a70a6
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.