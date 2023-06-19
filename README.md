# Attryb_assignment

BUYC Corp is a marketplace for second-hand cars. Dealers list their inventory of second-hand cars on
buycars.com. Buyers can look at the inventory and buy the car from buycars.com.

This Application lets you to register and Login and be able to post, list, update, delete second hand cars.

## Tech Stacks used:
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,express,mongodb,html,css,react)](https://skillicons.dev)

## Tools used:
[![My Skills](https://skillicons.dev/icons?i=vercel,github)](https://skillicons.dev)
<img alt="Coder GIF" height=50 width=80 src="https://www.w3schools.com/whatis/img_npm.jpg" />




# Live Demo Link [https://attryb-buycars.vercel.app](https://attryb-weld.vercel.app/)

# Home Page
![image](https://github.com/DhaanuI/Attryb_assignment/assets/112754832/4c58e869-56a3-4817-92fe-4c6735495d95)

# Click on Sign Up to Register
![image](https://github.com/DhaanuI/Attryb_assignment/assets/112754832/6ac33863-4748-494a-967b-33f19b2b46d2)

# Click on Login to signin
![image](https://github.com/DhaanuI/Attryb_assignment/assets/112754832/b9fa765a-0cf8-4560-b071-4149c90ec4dd)

# You can do all CRUD operations if you are a registered user
![image](https://github.com/DhaanuI/Attryb_assignment/assets/112754832/59958c50-4416-41b7-b7a3-1580b071cc7f)


# How To:

If you wish to run this project in your local machine

Follow the given steps:

* Clone our respository https://github.com/DhaanuI/Attryb_assignment

* Open our code in VS code

* Then do npm install to require the necessary packages and dependencies

* Go to Backend folder - cd backend

* do npm run server

* For frontend , go to Frontend, cd frontend

* do npm start

* Congrats! you have successfully started the application.


# API Endpoints :
backend route 
https://amused-yoke-hen.cyclic.app/  -----> Home page 

https://amused-yoke-hen.cyclic.app/users/register 
- method : POST   ||   status code : 201
- to register users, 
- body -> Name, Email, Password
- Bcrypt to hash the password

https://amused-yoke-hen.cyclic.app/users/login
- method : POST   ||   status code : 201
- to login users
- used JWT to create token


https://amused-yoke-hen.cyclic.app/users/logout
- method : POST  
- used blacklist json to store loggedout tokens


https://amused-yoke-hen.cyclic.app/inventory/
- method : GET   ||   status code : 200
- to get all the second hand car details 
- sorting and filtering are achieved here by passing query 


BELOW ARE AUTHENTICATED ROUTES

https://amused-yoke-hen.cyclic.app/inventory/getuser
- method : GET    ||   status code : 200
- to get the car info added by specific user

https://amused-yoke-hen.cyclic.app/inventory/add
- method POST   ||   status code : 201
- add car info along with ID of the dealer who is adding data

https://amused-yoke-hen.cyclic.app/inventory/update/:id
- method PATCH  
- updates the car info (only by the dealer who originally add)

https://amused-yoke-hen.cyclic.app/inventory/delete/:id
- method DELETE 
- DELETES the car info (only by the dealer who originally add)

< --  MULTIPLE DELETE by dealers -- >

https://amused-yoke-hen.cyclic.app/inventory/delete
- method DELETE
- used deletemany to delete multiple IDs


https://amused-yoke-hen.cyclic.app/oemspecs/
- method GET   ||   status code : 200
- to get all the available OEM models

https://amused-yoke-hen.cyclic.app/oemspecs/add
- method POST   ||   status code : 201
- to Post the OEM model info

https://amused-yoke-hen.cyclic.app/oemspecs/oemmodels
- query the number of OEM models available
- used aggregation to achieve this



# Thanks for your time, have a nice day!!!!



