# Admongrel Recruitment Task

In this assignment, I develop a Content Management System for different media.

## Disclosure
Generative AI hsa been used to generate fake data to populate the datastores, purely for demonstration purposes. 

## Choices of frameworks and libraries:
- **TanStack Router** (React framework) for front-end routing. Chosen as it supports file-based routing and would integrate well with TanStack Query if I end up needing to use it.
    > TanStack Router uses **Vite** for bundling.
- **Zustand** for state management. Chosen as it has a relatively simple API, especially compared to redux.
  > Some state, e.g. search and filter, will be managed as query parameters in the URL. This way, if a user shares a link, the options affecting the view will be preserved.
- **TailwindCSS** for styling.
- **Hono** for backend API. It has a similar API to express, however, it's more lightweight and only uses Web Standard APIs, meaning it can be deployed on various platforms (e.g. as a serverless function on Cloudflare Workers), without the need for compatibility with Node-specific APIs.
- **Zod** for schema validation. It allows for creating a schema, from which a TypeScript type can be inferred, and the schema can be used to validate data.

## Remarks

- As I am using an in-memory data store, I need to perform manual validation in some places. E.g. I'm having to manually check that genres exist when creating a media item using the `validateGenreId` function.
- I make use of Tanstack Router's route data loader. This has built-in caching, which supports a `stale-while-revalidate` strategy.

## Project structure

This project comprises of three packages— `api`, a Hono application which simulates API endpoints; `frontend` which is based on Tanstack Router; and `shared` which contains zod-based schemas (and inferred types) that are shared between the front and backend (end-to-end type safety).

## Running the project

To run the required components, run `npm run dev` within the `api` and `frontend` directories. The API will be available at `http://localhost:3000` and the frontend at `http://localhost:3001`.

## Areas for future development

In this section, I discuss what I would have done differently, if this was a production project.

### Overall architecture decisions
- Implemented a database, instead of in-memory data stores.
- **Local-first framework** like Zerosync (in development/alpha), Triplit, Powersync, etc. Frameworks like this allow for optimistic updates and server sync (useful in collaborative applications). Though similar behaviour is already possible, e.g. using Tanstack Query  (see [docs re: optimistic update on mutation](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates)), such frameworks also enable real-time updates across multiple clients and offline support.
- **Federated authentication** via OAuth or SAML protocol, where relevant.
- Might consider implementing a state machine to handle media status (e.g. draft, published, deleted, etc.) using something like XState.

### Security
Depending on the requirements of the project, I may consider a mature, off-the-shelf authentication service (like Clerk), or an open-source platform like Ory Kratos.

I would implement a permissions system, either RBAC or ACL-based, to control who can access and modify data.

To prevent Cross-Site Request Forgery (CSRF) attacks in some flows (e.g. approvals), I would implement a synchronizer token pattern.

Additionally, I would not avoid storing media on the application server. I would either integrate with a cloud storage provider (like AWS S3) or decouple file storage into a separate service, where I would specifically focus on preventing arbitrary code execution vulnerabilities.

## Legal disclaimer
This assignment, the code and any documentation therein, unless explicitly stated otherwise, remains the intellectual property of the author. The author grants Admongrel the right to use the contents of the assignment for the purpose of evaluating the author's application for employment. The author retains the right to use the code and documentation for any other purpose, including but not limited to personal use, open-source projects, and commercial use.

Admongrel may not use, modify, or distribute the code or any documentation therein for any purpose other than evaluating the author's application for employment without the author's explicit written permission.

This disclaimer is governed by the laws of the United Kingdom. Any dispute arising from this disclaimer or the use of the code or any documentation therein shall be subject to the exclusive jurisdiction of the courts of England and Wales.