# Mindful Reflection

## Description
Duration: 2 Day Sprint, 12/4-12/5

Mindful Reflection is a Full-Stack React app through which the user is prompted to take a few moments and reflect on their day. As they traverse the app, the user rates how they are feeling in their body, how they are understanding their current material, and how well they are feeling supported, and then can leave any additional comment/notes for posterity. 

On navigating past each step, the user's values are stored in Redux state as a Reducer object that is updated at each view. Upon reaching the 'Review' view, the final values of that state are rendered on the DOM. When the user submits, the information stored in the reducer is packaged as an object and sent via Axios POST request to the server. The Express server then builds a SQL query and updates the database with the user's reflection data, and stamps it with the date it was submitted.

The final view is an 'admin' page, located at /admin, where all previous reflections that are stored in the database are fetched with an Axios GET request and rendered to a table on the DOM.

All styling in Material UI.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Screenshot
  Coming Soon! Beautiful styling to behold.

### Installation
  Use this template to copy over to a fresh repository, and clone down to your local IDE of choice. Double check the dependencies in package.json, and then run 'npm install'. You will also want to set up a database based on the information in data.sql.
  
  Once your node/modules are all in place, use one terminal 'npm run server' to spin up the Express server on port 5000, then another 'npm run client' to spin up the React client on port 3000.

### Usage
  Click through the buttons as ya go! The user experience is gently linear. After submitting your first feedback, the user can take a link back to start a new survey, or see their feedback history.

### Built With
  - Front end: React, Redux, Javascript, HTML/JSX, Material UI
  - Back end: Node.js, Express, Postgres, Postico, SQL, Git

### Acknowledgement
  Thanks to Prime Digital Academy, my instructor Matt Black, my Gemini cohort for bouncing all sorts of neat ideas off of, and my family keeping the home front while I'm so busy with school!

### Support
  Bugs, Questions, Input, Feedback, please reach out to Allen.JoeG@gmail.com