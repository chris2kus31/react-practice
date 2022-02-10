# Node/React Challenge - Frontend Focus

A coding assignment for prospective developers.

## Challenge Overview

The design team at HomeLister has provided you with designs for a new signup form! Your task is to build out the project to the designs inside the `/design` folder. You can use any tools you like to help you complete the challenge.

## Tasks

### Setup Tasks

- Get the application running via Docker or locally.

- Make the signup page form functional: send an API call with submitted form data that creates a user on the backend (does not require modifications to the sever code)

### Design Tasks

- We have provided both desktop and mobile designs, but to conserve your time, you can focus on only one or the other
- Your users should be able to:
  - See hover states for all interactive elements on the page
  - Receive an error message when the `form` is submitted if:
    - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
    - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_
  - You will find all the required assets in the `/images` folder. The assets are already optimized.
  - There is also a `style-guide.md` file, containing the information you'll need, such as hex codes and fonts.

## Quick Start

- Change into the `client` directory and run `npm install`.

- Change into the `server` directory and run `npm install`.

- From the root directory run `docker compose up`, with an optional `-d` flag.

## Note

Next.js supports stylesheet import and CSS modules [out of the box](https://nextjs.org/docs/basic-features/built-in-css-support). If you want to use a different solution (CSS-in-JS, SASS/LESS), go for it!

Apple M1 users are recommended to read [the following](https://docs.docker.com/desktop/mac/apple-silicon/) document for troubleshooting docker issues. You may need to install the Apple Silicon-native version of Docker if you do not have it, and/or uncomment a line in the `docker-compose.yml`.

Don't hesitate to contact us with questions; we do not see this as a weakness. Feel free to spend as much or as little time as you'd like. **About two hours should suffice**.
