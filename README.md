
Baseline Requirements
---
- (15 points) a `Server`, created using Express (no alternatives will be accepted for this assignment)
- (10 points) a `Results` functionality which shows all data associated with a logged in user (except passwords)
- (15 points) a `Form/Entry` functionality which allows users to add, modify, and delete data items (must be all three!) associated with their user name / account.
- Persistent data storage in between server sessions using [mongodb](https://www.mongodb.com/cloud/atlas) (you *must* use mongodb for this assignment). You can use either the [official mongodb node.js library](https://www.npmjs.com/package/mongodb) or use the [Mongoose library](https://www.npmjs.com/package/mongoose), which enables you to define formal schemas for your database. Please be aware that the course staff cannot provide in-depth support for use of Mongoose.  (15 pts.)
- (10 points) Use of a [CSS framework or template](https://github.com/troxler/awesome-css-frameworks). This should do the bulk of your styling/CSS for you and be appropriate to your application.
  For example, don't use [NES.css](https://nostalgic-css.github.io/NES.css/) (which is awesome!) unless you're creating a game or some type of retro 80s site.

Your application is required to demonstrate the use of the following concepts:

HTML:
- (5 points) HTML input tags and form fields of various flavors (`<textarea>`, `<input>`, checkboxes, radio buttons, etc.)
- HTML that can display all data *for a particular authenticated user*. Note that this is different from the last assignnment, which required the display of all data in memory on the server.

Note that it might make sense to have two pages for this assignment, one that handles login / authentication and one that contains the rest of your application.
For example, when visiting the home page for the assignment, users could be presented with a login form. After submitting the login form, if the login is
successful, they are taken to the main application. If they fail, they are sent back to the login to try again. For this assignment, it is acceptable to simply create
new user accounts upon login if none exist; however, you must alert your users to this fact.

Node.js:
- A server using Express and a persistent database (mongodb).

General:
- (10 points) Your site should achieve at least 90% on the `Performance`, `Best Practices`, `Accessibility`, and `SEO` tests
  using Google [Lighthouse](https://developers.google.com/web/tools/lighthouse) (don't worry about the PWA test, and don't worry about scores for mobile devices).
  Test early and often so that fixing problems doesn't lead to suffering at the end of the assignment.

Deliverables
---

5. Fork this repository and modify the README to the specifications below.
6. Create and submit a Pull Request to the original repo. Name the pull request using the following template: `a3-FirstnameLastname`.

Acheivements
---



*Design/UX*
- (5 points) Describe how your site uses the CRAP principles in the Non-Designer's Design Book readings.
  Which element received the most emphasis (contrast) on each page?
  How did you use proximity to organize the visual information on your page?
  What design elements (colors, fonts, layouts, etc.) did you use repeatedly throughout your site?
  How did you use alignment to organize information and/or increase contrast for particular elements.
  Write a paragraph of at least 125 words *for each of four principles* (four paragraphs, 500 words in total).


FAQ
---

**Q: I'm confused about how user accounts work for this assignment.**

For the base requirements (discounting the achievements), it should follow this logic:

1. If the user logs in and the account does not exist, create the account and inform the user the account has been created.
2. If the user logs in and the account exists but the password is incorrect, inform the user.
3. If the user logs in, the account exists, and the password is correct, then take the user to the page that shows the data specific to the user.

Note that implementing some of the technical achievements may override this requirement, which is fine.

**Q: I'm getting a syntax error when trying to connect to MongoDB using the code in the tutorial.**

Your version of Node may be outdated. Check out [this link](https://stackoverflow.com/questions/77749884/session-options-session-syntaxerror-unexpected-token-mongoose-give-a) for more information.

**Q: Do I have to handle multiple user accounts?**

No. You only need one dummy account UNLESS you are doing the GitHub login technical achievement. Make sure you mention in your README how the user should log in!


**Q: Does "HTML input tags and form fields of various flavors" mean that we need to use multiple different kinds of inputs, or does it mean that we just need to use some form of input?**

You should have at least two different input types for this assignment. The purpose is to show your understanding beyond the simple `input` type you saw in A2.


## North Star Cafe Waitlist App
https://a3-chrislam.vercel.app

I have always been into making drinks especially in a home cafe setting. This project acts as a waitlist signup for "prospective customers" where they can see the potential menu once it is completed in a flexbox webdev setting.
On the top right, there is an Admin Login, which the prospected Admin enters his username and password to see all the possible entries. They can then add (use the form), modify, and delete. Logout is there too.

The CSS framework I used was shadcn. shadcn goes hand in hand with Next.js, and is easy to use, because it already has a set theme for the whole application. It is the kind of theme I did in vanilla htmll js css. It is easy, because you can create a shadcn/nextjs project all together, it is set up, and all you have to do to get the components is run the npm install comonents in the documentation and voila, just use the intances after importation.

The login info will just be basic for now:

Username: admin

Password: admin


Include a very brief summary of your project here. Images are encouraged, along with concise, high-level text. Be sure to include:

- challenges you faced in realizing the application
- what authentication strategy you chose to use and why (choosing one because it seemed the easiest to implement is perfectly acceptable)
- what CSS framework you used and why
    - include any modifications to the CSS framework you made via custom CSS you authored
- a list of Express middleware packages you used and a short (one sentence) summary of what each one does. If you use a custom function, please add a little more detail about what it does.

## Technical Achievements
- **Tech Achievement 1**: Deployed on Vercel instead of Glitch
  When I usually code static websites, Next.js is my preferred React framework, which offers server-side rendering and is great with Express and the preferred DB. Vercel works hand in hand with Next.js. It is a straight forwards web hosting service company. What happens is you can create your Next.js project, and once you are on Vercel, just login with your GitHub, and it will see the repo when creating a new project. After selecting that, you can also in any environment variables (aka our API key for MongoDB), and boom deploy. Once it deploys, you have the option to create a custom url, but it has to end in .vercel.app. Additionally, anything pushed to the "main" branch of your repo will be then updated with the changes, and you can literally see the changes after a few minutes on the website. No need to do deploy again, its instant! This is better than Glitch because 1. no having to wait for startup, 2. Easier intermediate setup for bigger projects, 3. Better scalability

### Design/Evaluation Achievements
- **Design Achievement 1**: Describing CRAP Principles
