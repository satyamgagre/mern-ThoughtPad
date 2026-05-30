<h1 align="center">ThoughtPad</h1>
<h3 align="center">Your Digital Notebook</h3>

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_App-success?style=for-the-badge)](https://mern-product-catalog-c8ha.onrender.com)

</div>

---

## Highlights

- MERN stack notes app built with MongoDB, Express, React, and Node.js
- Full CRUD flow for creating, reading, updating, and deleting notes
- REST API with a clean backend structure
- API protection with Redis-backed rate limiting
- Responsive UI built for desktop and mobile screens

---

## Screenshots

<div align="center">

### Homepage
*View all your notes in an organized dashboard*

![Homepage View](/frontend/public/ThoughtPad-HomePage.png)

---

### Create Note Page
*Add new notes with title and description*

![Create Note Page](/frontend/public/ThoughtPad-CreatePage.png)

---

### Update Note Page
*Edit and update your existing notes*

![Update Note Page](/frontend/public/ThoughtPad-DetailPage.png)

---

### Responsive Design
*Use the app comfortably across screen sizes*

![Mobile View](/frontend/public/ThoughtPad-MobileView.jpg)

</div>

---

## Tech Stack

**Frontend:** React, Tailwind CSS, Axios, React Icons

**Backend:** Node.js, Express.js, MongoDB, Upstash Redis

**Tools:** npm, Nodemon, ESLint

---

## Environment Variables

Create `/backend/.env`:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
PORT=5000
```

Create `/frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- npm or yarn
- MongoDB Atlas or local MongoDB
- Upstash Redis account

### Installation

```bash
git clone https://github.com/satyamgagre/mern-ThoughtPad.git
cd mern-ThoughtPad
```

Install and run the backend:

```bash
cd backend
npm install
npm run dev
```

Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend runs on `http://localhost:5000`.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/notes` | Get all notes |
| `GET` | `/api/notes/:id` | Get one note |
| `POST` | `/api/notes` | Create a note |
| `PUT` | `/api/notes/:id` | Update a note |
| `DELETE` | `/api/notes/:id` | Delete a note |

---

## What I Learned

This project helped me practice a complete MERN workflow, including API design, frontend/backend integration, environment-based configuration, and Redis-backed rate limiting to protect endpoints from excessive requests.

---

## Author

**Satyam Gagre**

- GitHub: [@satyamgagre](https://github.com/satyamgagre)
- LinkedIn: [Satyam Gagre](https://linkedin.com/in/satyamgagre)

---

<div align="center">

Made by [Satyam Gagre](https://github.com/satyamgagre)

</div>
