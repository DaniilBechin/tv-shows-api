# TV Shows API

REST API for managing a TV shows catalog with a web interface.

## Links

- **Live Demo:** (https://tv-shows-api-7jzs.onrender.com)
- **Swagger Docs:** (https://tv-shows-api-7jzs.onrender.com/api-docs)
- **Demo Video:** (https://drive.google.com/file/d/10j3GgXAN4pIxp14RM2n1LIgETp-KqKpP/view?usp=sharing)
- **Codefactor** (https://www.codefactor.io/repository/github/daniilbechin/tv-shows-api/overview/main)

## Features

- View all shows in a table
- Add, edit, and delete shows
- Sort by name, channel, genre, and rating
- Form validation with error messages
- Delete confirmation modal
- Swagger API documentation
- Dark theme UI

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Knex (migrations & seeds)
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)

## Getting Started

```bash
# Install dependencies
npm install

# Set up database (PostgreSQL required)
npx knex migrate:latest --env development
npx knex seed:run --env development

# Start server
npm start
