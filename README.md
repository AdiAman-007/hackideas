# HACK IDEAS 
Hosted Aplication ( login with credential `emp1` or `emp2` or `emp3` )- https://hackideas-b8809.web.app

#### Frontend - Angular application
#### Backend - Node, Express
#### Deployment - Firebase

### Folder Structure
- ![folder](/images/folder.png) hackideas
  - ![folder](/images/folder.png) frontend
     - ![folder](/images/folder.png) src
        - ![folder](/images/folder.png) app
        - ![folder](/images/folder.png) assets
        - ![folder](/images/folder.png) environments
        - ![folder](/images/folder.png) models
        - ![folder](/images/folder.png) modules
            - ![folder](/images/folder.png) add-challenge
            - ![folder](/images/folder.png) challenge-card
            - ![folder](/images/folder.png) dashboard
            - ![folder](/images/folder.png) header
            - ![folder](/images/folder.png) login
            - ![folder](/images/folder.png) tags
        - ![folder](/images/folder.png) services
  - ![folder](/images/folder.png) images
  - ![folder](/images/folder.png) mock backend

### Local Dev Setup
1. Clone the repository
2. Install packages - Run command `npm i` inside frontend and mock backend directories
3. Run mock backend - Run command `npm start` inside mock backend directory
4. Run frontend app - Run command `npm start` inside frontend directory
5. Mock backend runs on http://localhost:3000 and frontend app runs on http://localhost:4200
6. Login into the application using credentails `emp1` or, `emp2` or, `emp3`

### Build Application
1. Build frontend - Run command `npm build` or `ng build` inside frontend directory
2. Copy `frontend/dist` to `mock backbend/dist`

### Run Local Server
1. Clone the repository
2. Install packages - Run command `npm i` inside backend directory
3. Run local server - Run command `npm start` inside mock backend directory
4. Access the application from http://localhost:3000
5. Login into the application using credentails `emp1` or, `emp2` or, `emp3`

### Flow Diagram - frontend
![flow diagram](/images/flow.png)

### Lighthouse reports

Login

![lighthouse-login](/images/lighthouse-login.png)

Home

![lighthouse-home](/images/lighthouse-home.png)

Add challenge

![lighthouse-add challenge](/images/lighthouse-add.png)


### Application Screenshots

Login

![login](/images/login.png)

Home

![home](/images/home.png)

Add challenge

![add challenge](/images/add.png)

