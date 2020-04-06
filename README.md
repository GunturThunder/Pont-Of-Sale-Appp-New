<section id="home">
<h1 align="center">AsaUlu - Backend Point Of Sales</h1>


AsaUlu is an application that can helps cashier to manage production such as add product, edit product, delete product even order product
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)
</section>


## Table Of Content
<div class="header">
	<ul>
		<li><a href="#requirements">Requirements</a></li>
		<li><a href="#how-to-run">How To Run</a></li>
		<li><a href="#set-up-env-file">Setup .env</a></li>
		<li><a href="#end-point">End Point</a></li>
		<li><a href="#related-project">Related Project</a></li>
	</ul>
</div>

<section id="requirements">

## Requirements

1. [![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)	
2. [![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
3. <a href="https://www.getpostman.com/">Postman</a>
4. [Web Server (ex. xampp)](https://www.apachefriends.org/index.html)
</section>


<section id="how-to-run">
	
## How to run
1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file **.env** in root project folder, set up first [here](#setup-env)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database post, and Import file [post.sql](database/post.sql) to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. http://20.20.20.147:4040/order)
8. You can see all the end point [here](#end-point)
</section>

<section id="setup-env">
	
## Set up env file
Open .env file on your favorite code editor, and copy paste this code below :
```
PORT = 4040

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''
DB_NAME = 'pof_db'

JWT_KEY = 'thunder'
```
</section>

<section id="end-point">

## End Point

<div class="demo">
    <div class="items">
    	<h4 class="title-demo">Register</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Register.png?raw=true">  
    </div>
    <div class="items">
    	<h4 class="title-demo">Login</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Login.png?raw=true">
    </div>
    <div class="items">
    	<h4 class="title-demo">Product</h4>
      <h4 class="title-demo">GetAll - Product</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Product%20-%20GetAll.png?raw=true">
    <h4 class="title-demo">Insert - Product</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Product%20-%20Insert.png?raw=true">    
    <h4 class="title-demo">Update - Product</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Product%20-%20Update.png?raw=true">  
    <h4 class="title-demo">Delete - Product</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Product%20-%20Update.png?raw=true">    
    </div>
    <div class="items">
    	<h4 class="title-demo">CRUD - Category</h4>
		<img class="img-demo" src="https://github.com/GunturThunder/Pont-Of-Sale-Appp-New/blob/master/portfolio-img/Category%20-%20%20CRUD.png?raw=true">  
    </div>
</div>
</section>


<section id="related-project">
	
## Related Project
* [`AsaUlu-FrontEnd`](https://github.com/GunturThunder/Pont-Of-Sale-App-Using-ReactJs-Redux.git)
* [`AsaUlu-Mobile`](https://github.com/misrudin/PosReactNative.git)
</section>
