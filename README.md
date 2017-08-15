# Carmudi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Install Dependecies

Run `npm install` to install the npm packages described in the **package.json**.

## Angular Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## JSON Server

Run `$ json-server --watch api/cars.json` to start the server. Navigate to `http://localhost:3000/`.

## Requirements

 - [Node JS](https://nodejs.org/en/)
 - [Angular CLI](https://github.com/angular/angular-cli)
 - [JSON Server](https://github.com/typicode/json-server)

## Tasks
 - ~~To be able to show catalog page, you have to consume the data that it comes from [**cars.json**](cars.json)~~ **_Completed_**
 - ~~Data can only be displayed with Javascript, no other Programming Language can be used.~~ **_Completed_**
 - ~~You must use AJAX to display data~~ **_Completed_**
 - ~~You only have to display 10 listings~~ **_Completed_**
 - ~~Once you click in any listing, you have to show its details page, dynamically, using the same data you have in your JSON.~~ **_Completed_**
 - ~~You can only use 1 HTML file to display data.~~ **_Completed_**
 - ~~You can use as many libraries, plugins, frameworks as you want, but you have to explain the reason you chose them in every case.~~ **_Completed_**
 - ~~You are free to write the code the way you think it will be more clean and maintainable.~~ **_Completed_**
 - ~~Git knowledge is required. Workflow is also evaluated, so having history is desirable. It is not required, but it is recommended that you push your changes as frequently as possible to the repository, and not only at the very end.~~ **_Completed_**
 - ~~Our first evaluation criteria is quality. We prefer to see incomplete task with perfect quality than complete task without it.~~ **_Considered_**
 - ~~Write down the reasons for decisions you make in another Markdown or regular text file. Although it is not mandatory, it will be very appreciated.~~ **_See [Note](#note) section_**
 - ~~Use any tool you think make sense to ensure that good quality code is delivered~~ **_Completed_**

## Bonus (Optional)

 - ~~Make the layout responsive~~ **_Completed_**
 - ~~[Pagination](https://github.com/typicode/json-server#paginate) on Catalog Page, each page should have 10 listings~~ **_Used different approach_**
 - Add one text input on top of your catalog, every time you type something it should live filter the listings by name
   - If you finished pagination earlier, this should be affected as well
 - Usage of Grunt or Gulp
 - ~~Usage of LESS or SASS~~ **_SCSS_**
 - ~~If you selected a listing, and then refresh the page, it shouldn't come back to catalog~~ **_Completed_**
 - ~~Usage of frontend frameworks (React, AngularJS, Ember, etc.)~~ **_Angular_**

## Note 
 - Framework (AngularJS) : Advanced client-side framework which is maintained by Microsoft
 - Pagination : Decided to use ngx-pagination instead of **json-server#paginate** since the data is not too large. Fetching all the data and display 10 items per page is better than fetching the data on each page when navigating.