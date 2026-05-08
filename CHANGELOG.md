# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Bump version 1.0.0 → 0.1.0 in preparation for npm publication.
- `peerDependencies.test-data-factory` will be retargeted from
  `file:../test-data-api` to `^0.1.0` once `test-data-factory@0.1.0` is on the
  npm registry.
- Untrack `dist/` from git; rely on `npm run build`.
- `src/image-validation.test.ts` imports `validateImageUrls` from the
  `test-data-factory` package name (was a relative path into a sibling repo).
- `tsconfig.json` excludes test files from the build output.
- `src/index.ts` import trimmed to only the `DataPackage` type that's used.
- Added `files: ["dist"]` to `package.json` so `npm publish` ships only
  compiled output.

### Added

- ESLint flat config (typescript-eslint recommended) + Prettier.
- `lint`, `lint:fix`, `format`, `format:check`, `typecheck` scripts.
- CI runs lint, format check, typecheck, build, then tests (offline
  validation only — image-URL suite excluded by default).
- Twelve entries broadening Asian, African, and trans / non-binary
  coverage: Tu Youyou, Maryam Mirzakhani, Bibha Chowdhuri, Lin Lanying,
  Tebello Nyokong, Francisca Okeke, Catherine Ngila, Aderemi Kuku, Lynn
  Conway, Sophie Wilson, Audrey Tang, Ben Barres.

### Notes

- This package cannot be published to npm until `test-data-factory@0.1.0` is
  published and the peer-dep is repointed to a real semver. CI on GitHub
  Actions will fail to install dependencies until then for the same reason.
- The twelve newly added entries currently use the generic
  `Person_icon_BLACK-01.svg` placeholder for `picture`; sourcing
  public-domain photographs is a follow-up before any release that
  re-runs the network-bound image-validation suite.

<!-- Insert future releases below -->
