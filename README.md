# Project 2 - Rate My Cat

## Description

This project was assigned at the end of the fifth week of General Assembly’s 3-month SEI (Software Engineering Immersive) course, which teaches complete beginners the basics  of software engineering with an aim to launch a career in this sector. The aim of the project was to design an app in Express.js/Node.js over the course of one week. This project was a group project together with two other students on the course.

## Deployment link

[You can find Rate My Cat App! deployed on this link](https://ratemycatapp.herokuapp.com/). Sign up and get rating all the cats you can handle!

<img width="1620" height="961" alt="Image" src="https://github.com/user-attachments/assets/6804c61b-2e6e-4820-b0ff-dec004da7792" />

## Getting Started/Code Installation

### Instructions

#### Deployed app

Rate My Cat works in your browser and requires no installation. Simply create an account and log in to get started!

#### Local installation

To get started with a local installation of this app using this repository, open a terminal and run the following command to install the dependencies required:

```npm i average-rating bcrypt cjs concat-stream connect-flash dotenv ejs express express-ejs-layouts express-session method-override moment mongoose multer passport passport-local readable readable-stream save sharp stream``` 

## Timeframe & Working Team

We were given one week to complete this project and we made great use of that time, working extra hours each day and through the weekend. Our brief was to build an app as a group, so I worked with two others from my course, acting as team leader to manage the project.

## Technologies Used

We built this project using Express and Node.js, with HTML for the basic layout and custom CSS for the styling. We used Multer for image upload, MongoDB for database storage/retrieval and deployed our app on Heroku.

## Brief

Our brief for this project was to build an app from scratch as a team using an Express framework, and then to deploy this on Heroku. Users of the app had to:

- Be able to sign up, sign in and sign out
- Have a profile
- Be able to edit their profile
- Be able to change their password

We were also given extra criteria we could achieve, of which we had to pick a minimum of two to implement in our app:

- User must be able to create a resource
- User must be able to edit a resource
- User must be able to view all resources they created
- User must be able to view a single resource they created
- User must not be able to edit or delete other users' resources

Stretch goals included:

- Making the app responsive
- Using a CSS library such as Bootstrap
- Adding extra resources
- Adding image upload functionality

At the end of the project we had to present a presentation on our project covering the following points:

- What is the app about?
- What were the individual team members' contributions to the project?
- What was the most difficult part of the project to work on?
- What was your favourite part to work on?
- What would you add next?

## Planning  

### Development Overview  

Together with my teammates, I built on the lessons from my first project to establish the following development process. This gave us a clear structure we could work within as we began building our project:

1. Brainstorm
2. Pick an idea
3. Wireframe, ERDs and user stories
4. Create repo and starting files (.js, .css., .html)
5. Break the process down by requirements
6. Basic layout
7. Structure logic and begin working on functions
8. Test functions
9. Touch up styling
10. Test site
11. BONUS: Add extras

### Team leadership  

We agreed as a team that I would take the role of team leader, so I made sure from the outset that we followed a clear development and task tracking process in order to ensure we could hit our goals to deliver the minimum viable product on deadline, and give ourselves additional time to focus on styling touches, stretch goals and presentation day. I took an active role in managing team members and tasks, maintaining ongoing communication with my teammates via Slack and Zoom to guarantee we all stayed on target with tasks and could resolve any issues or bugs constructively and in a timely manner.

### Task management  

In order to create, assign and manage tasks, I created a public Trello board which all of the members of our group could access. This made working on our project much easier and allowed us to work more effectively as a group.

We split responsibilities evenly between us. One of our team worked on everything to do with the user; creating the User schema to model new users on, achieving sign-up, sign-in and sign-out functionalities via backend APIs, limiting access to the bulk of the website via user authentication, and creating the EJS templates for sign-up and sign-in.

Another member of our team worked on creating some of the EJS templates for cats, site styling (CSS and adjusting template structures), and working on a functionality to view and search cats by location.

I worked on our cat functionalities, the cat leaderboard, templates and helped with styling. I also assisted with bug resolution and managed the overall flow of the project.

We reviewed the Trello board each day to assign tasks, mark them as completed and create any additional tasks as required to keep track of these. You can find the link to our Trello board [here](https://trello.com/b/BjeZaJ0E/rate-my-cat).

<img width="1907" height="984" alt="Image" src="https://github.com/user-attachments/assets/432eb802-1fda-4fcb-8768-6fe96fd23aa1" />

## Build/Code Process

Documented below are the stages we went through in order to build the code for our project.  

### Stage 1: Brainstorming  

We had an initial brainstorming session as a team, coming up with various ideas for our app. We quickly settled on the idea of an app where users could upload images of cats and have these rated by other users. Users would also be able to rate other people's cats, and there would also be a leaderboard showing the most popular/highest rated cats.

### Stage 2: Pick an idea  

We chose our idea very quickly - who doesn't love cats? Dog people, that's who! - and armed with a solid idea, we began developing the wireframes, ERDs and user stories for our app, which we had decided to name simply Rate My Cat.

### Stage 3: Wireframe, ERD and user stories  

#### ERD

We began with an ERD to map the relations between our models. You can find the link to our ERD [here](https://git.generalassemb.ly/alex-sasha-ward/RateMyCat/blob/a3ae43f2f5e76c60127c7b5af1a83c0d83f1be7f/ERDs/RateMyCat%20ERD%20Final.pdf).

<img width="899" height="547" alt="Image" src="https://github.com/user-attachments/assets/63351d9a-af20-4807-8330-83205a9df1be" />

#### Wireframes

We then began working on wireframes to visualise how our site would look page by page. You can find the link to our wireframes [here](https://git.generalassemb.ly/alex-sasha-ward/RateMyCat/blob/8c10dd626513ff39705da146a9542ff4496579a5/Wireframe.png)

<img width="541" height="244" alt="Image" src="https://github.com/user-attachments/assets/878f8565-cf9b-4eb6-8f04-5a20861a2c73" />
<img width="512" height="248" alt="Image" src="https://github.com/user-attachments/assets/0b80281c-790e-43e0-ad8b-5613af491ffb" />
<img width="573" height="271" alt="Image" src="https://github.com/user-attachments/assets/a47b3d13-de97-4b8d-b3e5-83357341b6be" />

#### User Stories

We took time to think about the features and functionalities we wanted our users to have, and set out the following user stories:

- As an unregistered user, I want a function to sign up to the site  
- As an unregistered user, I want a quick rundown of the site’s purpose  
- As a registered user, I want to be able to create a profile  
- As a registered user, I want to be able to create a profile of my cat  
- As a user of the site, I want to be able to see other users’ cats  
- As a user, I want to be able to rate other cats 
- As a user, I want to be able to edit my cat’s profile  
- As a user, I want to be able to see which cats are most popular  
- As a user, I want to be able to log in/out of my account  
- BONUS: As a user, I want to be able to comment on other cats  
- BONUS: As a user, I want to learn about the creators of the site  
- BONUS: As a user, I want to see cats in other locations  
- BONUS: As a user, I want to see who other users are  

### Stage 4: Creating Git repo and starting files  

As team leader, I took charge of initial file and folder setup, first creating a repo on GitHub for our project, then laying out the basic file and folder structure for our models, controllers, routes and views. I also created the database which would store our information on mongoDB.

### Stage 5: Requirements  

We got together as a team to define the basic requirements for our site. We wanted the user to:

- be able to create an account where they could upload an image of their cat and then
- submit this to be rated by other users
- have a leaderboard of the most popular cats
- with an average rating taken from the sum of all of their previous ratings
- show cats by location
- have the functionality to delete a cat
- or add a cat/change their cat

### Stage 6: Basic layout  

After we established the main functionalities we wanted from our app, we began working on the basic layout. We wanted the user to be greeted by a welcome page, with links to an About Us page, a joke Disclaimer page, and a page with a little bit more info about us and the project. I started by creating the HTML file (**layout.ejs**) that would act as the basic template for our site. It includes links to the different sections of our website, which each represent a different route that accesses a different .ejs view file. The **<%- body %>** tag allowed me to insert other .ejs files - which are stored in separate folders - into the body of this page depending on what we wanted the user to see as they navigate the site, and whether they are logged in or not:

<img width="1189" height="824" alt="Image" src="https://github.com/user-attachments/assets/30ab40b0-c719-440f-a239-83783ded7a09" />

The **<%= title %>** tag on **layout.ejs** allowed me to change the title visible to the user on each page depending on the .ejs file being accessed:

<img width="582" height="449" alt="Image" src="https://github.com/user-attachments/assets/980768f8-f889-454a-9c92-89436788761a" />

It was initially tricky to understand how the concept of templating works in Express, but with a little trial and error, my understanding of how to make use of backend tags like **<%- body %>** and **<%= title %>** clicked into place, and setting up the initial .ejs files went much more smoothly. Templates are divided into folders based on what they relate to: **User**, **Leaderboard**, **Cat**, **auth** for sign-in/sign-up pages, **info** for our About, Disclaimer and Info pages, and **home** for the main site index.

### Stage 7: Structuring logic and working on functions  

After initial setup of the files and folders for our project, and having assigned tasks in Trello, I focused on our cat functionalities and the cat leaderboard. With my teammate having created the User schema already, I started by writing the APIs we would need for all of our CRUD operations relating to cats, e.g. add a cat, edit a cat's information, delete a cat and get information about the cat:

<p float="left">
<img width="388" height="434" alt="Image" src="https://github.com/user-attachments/assets/93159938-00a9-444f-b9f3-ee79bb2389cc" />
<img width="528" height="434" alt="Image" src="https://github.com/user-attachments/assets/9b2a7fe6-6037-4f8d-b1c8-31927356dacd" />
 </p>
 <p float="left">
<img width="508" height="460" alt="Image" src="https://github.com/user-attachments/assets/78dea7fc-b2ba-4ad3-abae-e9817ea04452" />
<img width="406" height="460" alt="Image" src="https://github.com/user-attachments/assets/f17fee4e-2b88-48ab-8f1d-4db6a2fc5770" />
 </p>
<img width="639" height="435" alt="Image" src="https://github.com/user-attachments/assets/496c9dc6-e27f-4696-8289-54f487aeb5c3" />

As one example, let's take the "Add a cat" functionality., The user is first presented with a form on the frontend:

<img width="806" height="823" alt="Image" src="https://github.com/user-attachments/assets/48a58a0b-6f55-4755-9ec7-28ab4c83c552" />

When the signed in user clicks submit on the form, this triggers the **cat_create_post** API, which then captures the information entered in the body of the page alongside the URL for the image of their cat, sends this as a request to the backend, and checks if this information is valid according to the structure of the Cat schema, which I had written at the outset:

<img width="422" height="369" alt="Image" src="https://github.com/user-attachments/assets/f63fe036-4930-4ae7-9dc2-8e8999910812" />

If the request received from the frontend is valid according to the Cat schema, this information is saved as an instance of Cat in our database:

<img width="512" height="228" alt="Image" src="https://github.com/user-attachments/assets/8536a2ec-329e-42a3-a41b-f7ef8b50ebc9" />

The API then finds the information for the user that is logged in using their ID, adds the new information for their cat to the user object created when they signed up, and saves this update:

<img width="573" height="328" alt="Image" src="https://github.com/user-attachments/assets/b4b1bab5-8272-4c3a-a983-a7fb5784a01c" />

For the leaderboard, I realised we only needed a single API:

<img width="714" height="232" alt="Image" src="https://github.com/user-attachments/assets/109791d1-5d0f-4171-b74b-23f9c93ab2f5" />

When the user navigates to the leaderboard page, this calls the **leaderboard_show_get** API, which searches for all of the cats listed in the database and populates the **user** field in each instance of a cat with the information related to the owner of the cat. All of this information is then sent as a response to the frontend, where the information is displayed to the user (see **Favourite Functions** below for more).
 
### Favourite functions

#### Cat POST API

This function, which posts an instance of a cat, includes the average rating for the individual cat. It took some trial and error to get the average rating just right. Initially, I thought I would create an empty array to store each rating as it was made by the respective user, and then realised I could simplify the function. Here you can see that if no rating has yet been submitted for the cat in question, the first rating is pushed to the empty array in the "rating" key on the instance of the cat. If a rating already exists, the new rating is simply added to the existing value, which is then divided by 2 to provide an average. This average rating is then returned and displayed to the user.

<img width="716" height="311" alt="Image" src="https://github.com/user-attachments/assets/b404a797-868a-4c74-9abe-68d604e11b27" />

#### Leaderboard sorting

This code sorts the cats in descending order of average rating. Since this was early on in my development as an engineer, it felt like a hard task at the time, but now seems so easy by comparison! I created a variable called "order" which retrieves all instances of a cat from our database. These are then sorted via the .sort() method from highest to lowest, and displayed in descending order for the user.

<img width="643" height="507" alt="Image" src="https://github.com/user-attachments/assets/4e325bc3-50b0-46df-b3fe-0fbd57422c52" />

### Stage 8: Testing functions  

We tested functions repeatedly as we went along and got each other to test these to ensure we weren't missing any bugs. Using lots of console.logs to track the data  we were receiving from functions and our API calls to the database, we were able to spot errors and resolve these. We iterated through functions a few times to get them just right before implementing them in the master branch. We also checked the database to ensure our API calls were adding, updating and deleting data correctly.

### Stage 9: Styling  

We went through several iterations of our website, building on the style as we went, before we settled on the final version. We knew we wanted to go for a look that was fun and friendly - we're talking about rating cat pictures after all! - that would be welcoming to the user:

<img width="1271" height="905" alt="Image" src="https://github.com/user-attachments/assets/879405f1-421c-4d52-878e-a385edc3d1b0" />

Here you can see our first iteration. I originally went for a gradient from orange to pale orange for the title:

_body {
background: linear-gradient(to bottom, #FF6600 0%, #FFFFFF 100%);
}_

While being quite playful and welcoming, we all agreed that the background image was slightly distorted and the overall design was quite dated. We decided as a group to try a different style, and came up with something a little more neutral in terms of colour:

<img width="1330" height="882" alt="Image" src="https://github.com/user-attachments/assets/353a0204-f3f7-41d1-99d8-3374eb7958e9" />

We realised our background image was a major distraction for viewers to the site, and clashed with the other elements on the page, such as the main nav section with contents that change with each EJS template. We initially set the nav section to have an opacity of approximately 80% to allow users to still see the background image, but eventually decided to do away with a background image entirely and go for a more modern, simple, yet cute look:

<img width="945" height="862" alt="Image" src="https://github.com/user-attachments/assets/8af10891-95ba-4b85-a08d-ad1175217713" />

Our site is neatly divided into clear sections: the title at the top of the page, a nav bar with links to the different sections of our site, the main nav div which displays content by EJS template, and our footer with links. Here is an example of our CSS for the body (which includes the playful background image) and the div with a class of **main-nav** that the main content of our site sits in:

<img width="500" height="819" alt="Image" src="https://github.com/user-attachments/assets/f419f8e1-90c3-47e2-9e09-93b830114164" />

We experienced a lot of issues with conflicting CSS rules in order to get the website mobile responsive, and managed to resolve all of our conflicts just in time for presentation. Future iterations would make more use of media queries in order to avoid any conflicts when switching between computer and mobile.

### Stage 10: Testing the site  

With our site finished, we made sure to go through each page and function to make sure everything worked well. We had enough time before delivery to be able to do this, and it meant we were able to fix slight issues in e.g. the way elements displayed or functions affected elements on the page before delivering the project.

### Stage 11: Bonus features  

We achieved a few of our bonus items by adding an About Us page which gave details on our team as well as links to our personal GitHub repos, as well as our Ailurophiles link, which displays a list of other users to users who are logged into the site. 

## Challenges

We originally wanted to include a location functionality that would let users see cats in other areas, displayed on a map. We realised that we didn't have enough time in the process to allow us to include this, so we decided to leave this functionality out entirely and focus on getting our core functionalities up and running perfectly. Creating the leaderboard was also a big challenge since I had a difficult time getting the cats to display properly in descending order of average rating.

### Problem-solving  

When it came to solving issues, I was proactive in identifying and helping with issues as they arose. I made sure to keep a list of all current bugs and issues so we could keep track and address these one by one as time allowed. If a team member was having an issue or encountering a bug, I made sure we communicated and addressed this together with a "two heads are better than one" approach, and appropriate console.logs to pinpoint the issue precisely. I made sure we didn't each spend too long trying to fix errors, and instead got teammates to share their screen so we could talk through the code together. On several occasions, we identified the issue almost immediately after sharing screens and were able to fix the issue quickly, e.g. a delete button that wasn't working, which I saw was due to the fact that the text within the button had been set to trigger the function instead of the button itself.

## Wins

The biggest win for me was the fact that our project was finished, fully styled and ready to go on presentation day. Thanks to sticking to a proper development schedule and prompt bug/error detection and resolution, we were able to present our project on presentation day without any real issues! I'm also very happy that our app is almost entirely mobile responsive.

<img src="https://github.com/user-attachments/assets/480698c1-64b0-4fcf-b47d-c388bc1fef80" width="300" height="600" />

## Key Learnings & Takeaways

This project taught me that communication between team members really is key to the success of a group project. In order to resolve issues promptly, it is essential to keep talking to the others on the team about what you're doing, when you're doing it, the issues you encounter along the way, and most importantly - to ask for help! It's also extremely important to ensure that if you're working in the same files, you tell each other what you're doing, and if necessary, create a separate branch on your local repo to work on individual updates and functionalities/features, then merge this into your development branch before pushing and opening a pull request. This avoids conflicts in the main development branch and potential merge issues, something we dealt with a lot in the early stages.

I also learned that I actually enjoy managing a team of devs and handling management of a project! It was strange at first, but having been my own boss for a decade and having to manage translation projects - some of them quite large and working with up to 10 other translators - I found my skills readily transferred across to software engineering and the development process went well as a result.

## Bugs

At present the main bug is that our user information table does not fit neatly in the main body on mobile, but spills over. Additionally, Heroku periodically deletes images, so some images such as profile photos will not display properly. This could be rectified by using Cloudinary for image storage rather than using Multer to upload to Heroku.

## Future Improvements

In future iterations of Rate My Cat, I want to add the location functionality so users can view cats in their area or another location, along with the average rating for the cats. This would be displayed on a map which users can search.
