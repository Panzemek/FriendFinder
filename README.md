# FriendFinder
An express.js and mysql project for comparing (very loosely) friend compatibility by a series of questions.

## Notes to Use
In order to run this app you will need to connect it to a mysql database and a table within it containing the following columns, all NOT NULL:
-friendID
-name
-Ten question columns (Names: "question1", "question2", etc)

The comparison logic between users will function for an arbitrary number of questions if you want to add them, but the HTML survey is currently not dynamically generated, requiring exactly ten questions.  This could be dynamically generated in the future.

##Technologies
The Chosen jquery extension was used for nicer selection boxes.  Bootstrap was used for the forms and buttons.  Mysql was used to store data.  Express was used to parse the form data and handle routing.  Jquery and javascript were used for other scripting requirements.

## Issues
Better formatting and proper form resets on entry were sacrificed due to time constraints.

## Demo
See a demonstration of the app functioning here: https://youtu.be/CYM3cGn85AI


And a screenshot of the API call here: https://imgur.com/CE4RJYR
