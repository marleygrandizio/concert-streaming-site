# Concert Streaming Pricing Page

A customer-facing page for a concert-streaming venture. It presents the confirmed single-concert streaming pass at $9.99 USD per event. Stream quality and availability are subject to event rights; replay access and fan chat are not represented as included.

## Development

Built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion. Use Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

The preview is served at `/concert-streaming-site/`.

## Deployment

Repository: https://github.com/marleygrandizio/concert-streaming-site

Website: https://marleygrandizio.github.io/concert-streaming-site/

The GitHub Actions workflow runs lint, builds the site, and deploys it to GitHub Pages on pushes to `main`.

The page reuses the source site's React/Vite architecture, animation library, and warm editorial style. Navigation and calls to action scroll to working sections on this page. No checkout is provided.
