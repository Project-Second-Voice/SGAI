# Private SGAI review deployment

Review URL: https://sgai.jjw92127.chatgpt.site

The hosting project is dedicated to SGAI. Source of record remains https://github.com/Project-Second-Voice/SGAI on `main`. The hosting service receives a deployment mirror of the same source commit; GitHub `origin` is unchanged.

## Access and review status

The deployment is owner-private. Viewers must be allowed by the hosting service; the URL alone does not grant access. SGAI review labels, anonymous stories, and noindex/nofollow remain enabled. Sharing with additional reviewers is a separate access decision.

## Configuration

- `.openai/hosting.json` identifies the existing hosting project and `dist` static output.
- `src/config.ts` uses the assigned review URL as its canonical origin.
- Build: `npm ci` then `npm run build`.
- Validation: `npm run typecheck` and `npm run lint`.
- The deployment archive contains only `.openai/hosting.json` and `dist/`, not private documents, development dependencies, or repository history.
- `dist/_redirects` provides SPA route fallback. Review indexing and basic headers are generated during the build.

For updates, reuse this hosting project. Commit changes to SGAI, push the identical commit to GitHub and the hosting source branch, build and package that source state, save the version, deploy privately, and wait for a successful deployment status. Do not store hosting credentials in this repository. There is no automatic GitHub deployment workflow.

`docs/V1_REPORT.md` describes the initial local delivery. This deployment note records the subsequent requested hosting setup.
