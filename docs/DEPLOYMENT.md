# SGAI deployment

Website: https://project-second-voice.github.io/SGAI/

Source: https://github.com/Project-Second-Voice/SGAI on `main`.

## GitHub Pages

In repository Settings → Pages, Source must be **GitHub Actions**. Deploying the repository root directly serves uncompiled React/TypeScript and causes a blank screen.

`.github/workflows/deploy-pages.yml` installs dependencies, runs lint, builds with `npm run build:pages`, uploads `dist`, and deploys it to GitHub Pages on each push to `main`. It can also be run manually from Actions.

The Pages build uses `/SGAI/` for assets and routing and the GitHub Pages URL for canonical links. `scripts/prepare-github-pages.mjs` creates entrypoints for all main pages and all graduate stories so direct links and refreshes work without server rewrites. It also creates a recovery page and `.nojekyll`.

Validate locally with `npm run lint` and `npm run build:pages`. Serve the output beneath `/SGAI/` on a static HTTP server when testing this build.

## Existing Sites deployment

https://sgai.jjw92127.chatgpt.site is a separate, publicly accessible review deployment. `.openai/hosting.json` identifies its existing project. `npm run build` creates the root-path build for that host. GitHub pushes do not automatically update Sites.

Both deployments retain review labels and noindex/nofollow. These directives discourage search indexing; they are not access controls. Anonymous stories remain anonymous, and source documents are not included in deployment artifacts.
