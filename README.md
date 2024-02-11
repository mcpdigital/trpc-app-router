# Next.js 14.1 Application with TRPC, Prisma, Clerk, and Tailwind CSS

This is a full-stack small application for my learning, built using a modern tech stack of Node.js, Next.js, React, tRPC, Prisma, Clerk, and Tailwind CSS. The application features a CRUD interface for a `UserData` schema, which corresponds to the data structure returned by the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Next.js**: A React framework for building JavaScript applications.
- **React**: A JavaScript library for building user interfaces.
- **tRPC**: An end-to-end typesafe RPC framework.
- **Prisma**: An open-source database toolkit.
- **Clerk**: A complete user management solution.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Shadcn**: An UI component library for creating beautiful and interactive user interfaces.

## Features

- **CRUD Operations**: The application provides a user interface for creating, reading, updating, and deleting `UserData`.
- **Type Safety**: Thanks to tRPC, the application has end-to-end type safety.
- **User Management**: With Clerk, the application handles user authentication and management.
- **Responsive Design**: Tailwind CSS is used for a mobile-first, responsive design.

## Getting Started

1. Clone the repository:
   git clone https://github.com/mcpdigital/trpc-app-router
2. Install the dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application is deployed on Vercel. To deploy your own version, you can follow the [Vercel deployment documentation](https://vercel.com/docs).

## Database

The application uses a MySQL database hosted at PlanetScale.

## Contributing

This is a study project and have some pages that are just for learning, do not expect to have a special app.
Contributions are welcome but do it for study and if you believe you can improve something of your interest feel free to improve or suggest. I've used ideas from many tutorials, repos, etc thanks for the dev community.

## License

This project is licensed under the MIT License.
