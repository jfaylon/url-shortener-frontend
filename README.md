# url-shortener-frontend

## Prerequisites

### Tech Stack
- Node.js v21.2.0
- Next.js 14.0.4

### Backend

Setup the `url-shortener-backend`
```
https://github.com/jfaylon/url-shortener-backend
```

## Installation

### Install node modules
After cloning the repository, Go to the folder and install the modules

```bash
  npm install
```
OR 
```bash
  npm ci
```

### ADD ENVs
Next, add your `.env` file to the root directory

```
NEXT_PUBLIC_API_URL=
```

OR

You can copy the `.env.example` provided and paste it as `.env`

The `.env.example` contains these:

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Please do note that Next.js has a special handling for envs that have `NEXT_PUBLIC_` as it can be accessed in the frontend and backend of the application.


## Running the Application

First, run the development server:

```bash
npm run dev
```

If you want to run in the production setup, the following needs to be done.

```
npm run build
npm run start
```

It will build the application so that when `start` is made the application is already built and ready to run. This is suitable in the production setup when the pages are not compiled on the fly.
ls.

## Notes

### Tech Limitations and Possible Improvements
- Unit and Automated testing can be implemented.
- The application is built using the versions mentioned in the tech stack. There is no guarantee that the application may work for newer and older versions.
- Validations can also be done in the frontend to lessen the API calls needed.