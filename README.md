# Run Tracker Client

### Technologies used:
- HTML
- CSS
- Bootstrap
- Javascript
- Jquery
- AJAX
- Atom text editor
- Terminal
- Google Chrome

---
### App Description
As the title says, this app allows you to log and track your runs. User sign up or sign in to begin, and then are dropped on the screen to log their runs. Runs are logged by entering the distance the user ran and the time it took to do such. The time field accepts HH:MM:SS values and cannot exceed 24 hours. On the next tab, users can view the runs they have logged, update any of the logged runs, or delete them. Users also have the ability to change their password from the button in the top right as well as sign out.

---

### Planning
For planning, I set up some basic user stories to outline basic functionality as well as a couple details that were more of a strectch goal. My preliminary wireframes helped to guide the process of laying out the site but ultimately I decided to go a different direction than the original plans.

---

### Development Process:
For the front end, I began with user authentication forms. Using my previous project as a guide, I was able to get those forms up and running quickly and then move onto creating forms to CRUD the relational table. This followed about the same format and I was able to get those working with few problems. Having completed these steps, I had mostly met the goals of the project and decided to spend time improving the UI and ensuring proper form inputs. I looked into regex and how I could use it to restrict inputs in my forms. With it, I was able to ensure that the time field for runs would only accept appropriate numbers, immediatly delete incorrect values, and would auto-insert a colon at the correct place. Once I was happy with that feature, I moved on to making a more pleasing UI. This part took the most time and is probably something I will continue to work on after the project is over.

---

### Unsolved Problems/Future Plans:
I had originally wanted that on update of a run, the new values would insert and the field would be highlighted briefly as a measure to show it was successful. I was able to either auto-refresh the field, or highlight it but not both. As it is not a feature that adds a ton of value, I decided to move on from it and focus more on improving the overall user experience but I do plan to return to such and work it out in the future. Styling, while I did spend a good deal of time on it, is still something I will return to as I feel it is important for the site to be functional as well as look nice if I want to add it into a future portfolio. I also would like to implement a way to find the average pace of all a users runs and allow them to compare such to other users of their age group. This may still be awhile before I get to it something I will work towards.

---
### User Stores:
- As a user, I want to be able to sign up, log in and out, and change my password
- As a user, I want my specific infomation to be stored for just me to view
- As a user, I want to be able to log my run distances and the time they took
- As a user, I want to be able to see a log of all runs logged
- As a user, I want to see the average mile pace of all runs (stretch goal)
- As a user, I want to see how I compare to other in the same age/gender range (much greater strech goal)

---
### Links:
- Wireframes: https://i.imgur.com/lfmvK3n.jpg
- Run Tracker API: https://github.com/rbarnada/fullstack-backend
- Deployed API: https://run-tracker-api.herokuapp.com/
