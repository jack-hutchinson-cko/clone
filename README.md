# Checkout.com Documentation

This is a [Next.js](https://nextjs.org/) project that utilises MDX files to produce checkout.com/docs documentation.

## Getting Started

Requirements

- MYGET_NPM_TOKEN (ask in #frontend channel or a CODEOWNER for this token)
- Node v14
- npm v6

Installation

- Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Run `npm install` to install all packages.
- To run the development server:

```
npm run dev
```

- To run the build

```
npm run build
npm run start
```

Open [http://localhost:3000/docs](http://localhost:3000/docs) with your browser to see the result.
If you are running the NAS version of the site, open [http://localhost:3000/docs/four](http://localhost:3000/docs/four)

## ABC vs NAS

The default environment variable is set to 'ABC'. To view the 'NAS' version of the CKO Docs, set the following variable in the `.env` file

```
NEXT_PUBLIC_CLIENT_TYPE="NAS"
```

Alternatively, you can use `npm run dev:abc` or `npm run dev:nas` if you prefer not to edit the `.env` file and build each time.

## Deploy on Vercel

The project is deployed via Vercel. To create preview links you must be a member of the `CKO Docs` team on Vercel.
When a pull request is created, a Vercel Bot will link the Vercel previews for ABC and NAS projects in the repo.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
