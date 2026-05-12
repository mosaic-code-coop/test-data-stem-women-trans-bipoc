# Contributing

The dataset is split across per-record TypeScript files. Each person, group, and event lives in its own file. A build step assembles them into the consolidated `DataPackage` that consumers import.

## File layout

```
src/
  person/
    katherine-johnson.ts
    ada-lovelace.ts
    ...
  group/
    nasa-mathematics.ts
    ...
  event/
    stem-achievement-conference-2024.ts
    ...
```

- One file per record. Filename must equal the `id` field plus `.ts`.
- IDs are lowercase, hyphen-separated slugs: `katherine-johnson`, not `Katherine_Johnson` or `katherine_johnson`.
- For non-Latin names, the slug uses the Latin transliteration (`englishName`) — see `audrey-tang.ts` for an example.

## Adding a person

1. Copy an existing file in `src/person/` as a template
2. Set the filename and the `id` field to your new slug (must match)
3. Fill in the fields (see [Field reference](#field-reference) below)
4. Run `npm run build` — the assembler will validate IDs, references, and the data shape
5. Run `npm test` to confirm

The assembler checks:

- `id` field matches the filename
- IDs are unique within each kind (person/group/event)
- `groupMemberships` references existing groups
- `attendeeIds` (on events) reference existing people

## Adding a group or event

Same flow, files go under `src/group/` or `src/event/`.

For events, `attendeeIds` is an array of person IDs (the new slugs).

## Field reference

See `BIO_WRITING_SPEC.md` for guidelines on writing bios. The type definitions for `Person`, `Group`, and `Event` live in the framework: `@mosaic-code/test-data-factory/src/types.ts`.

Required for `Person`: `id`, `fullName`, `bio`, `email`, `phone` (or `null`), `picture` (or `null`), `tags`.

## Submitting a PR

1. Edit the relevant file under `src/person/`, `src/group/`, or `src/event/`
2. Run `npm test`
3. Commit with a clear message: `add: <name>` or `fix: <name>'s bio reference`
4. Open a PR

Small, focused PRs are easier to review. One person/group/event per PR is ideal.

## What gets generated

`src/_generated/data-package.ts` is **auto-generated** by `assemble-data-package`. Don't edit it directly. It's gitignored. Each `npm run build` or `npm test` regenerates it.

## Cultural and editorial notes

This dataset focuses on real contributions by women, trans, and BIPOC people in STEM. Bios should be factual, sourced (use the `reference` field), and respectful. Cite credible sources — Wikipedia, university faculty pages, journal author bios, obituaries.

If you spot something incorrect, even small — open a PR. That's the point.
