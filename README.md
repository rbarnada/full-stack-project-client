# Full Stack project

### Technologies used:
- HTML
- CSS
- Bootstrap
- Javascript
- Jquery
- AJAX
- Ruby
- Rails
- Atom text editor
- Heroku
- Terminal
- Google Chrome

---

### Planning
For planning, I set up some basic user stories to outline basic functionality as well as a couple details that were more of a strectch goal. My preliminary wireframes helped to guide the process of laying out the site but ultimately I decided to go a different direction than the original plans.

---

### Development Process:
For the back end, I began the project by setting up the templates and seeing what was in each. The api template came with more or less everything needed for users so I was able to quickly get that working then more onto the relational table, runs. I used the protected controller for that as to keep all users info only viewable by them. This took some time to figure out how it varied from open read but using the examples controller as a reference, I was able to get it working. As my runs table was dealing with time as a column, I had to do some research on how to best display that to the user. I was able to find some answer on StackOverflow and was able to make changes to the display of the time by adjusting the time attribute in the runs model. I later went back and decided I would add the created date to the serializer and had to write a method within the serializer to best display that date information.

For the front end, I began with user authentication forms. Using my previous project as a guide, I was able to get those forms up and running quickly and then move onto creating forms to CRUD the relational table. This followed about the same format and I was able to get those working with few problems. Having completed these steps, I had mostly met the goals of the project and decided to spend time improving the UI and ensuring proper form inputs. I looked into regex and how I could use it to restrict inputs in my forms. With it, I was able to ensure that the time field for runs would only accept appropriate numbers, immediatly delete incorrect values, and would auto-insert a colon at the correct place. Once I was happy with that feature, I moved on to making a more pleasing UI. This part took the most time and is probably something I will continue to work on after the project is over.

---

### Unsolved Problems/Future Plans:
I had originally wanted that on update of a run, the new values would insert and the field would be highlighted briefly as a measure to show it was successful. I was able to either auto-refresh the field, or highlight it but not both. As it is not a feature that adds a ton of value, I decided to move on from it and focus more on improving the overall user experience but I do plan to return to such and work it out in the future. Styling, while I did spend a good deal of time on it, is still something I will return to as I feel it is important for the site to be functional as well as look nice if I want to add it into a future portfolio. I also would like to implement a way to find the average pace of all a users runs and allow them to compare such to other users of their age group. This may still be awhile before I get to it something I will work towards.

---
### User Stores:
