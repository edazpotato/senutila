# senutila

Better than Discord.JS

## Dependencies...

...are handled with [pnpm](https://pnpm.io/), which is used the same way as normal npm (except with a p at the start of comamnds), it's just faster and more efficient with storage space.

To install it, use `npm i -g pnpm` and then use npm commands as normal (with a prepended p)
E.g.

```bash
pnpm install
pnpm i -D @types/node
pnpm un @types/node
pnpm run start
pnpm publish
```

## Developing the library

```bash
# With Node.JS 14+ installed...
npm i -g pnpm # You need to use pnpm because otherwise the lockfiles will mess up
pnpm install
pnpm run build # Build once
pnpm run dev # Automaticaly rebuild when file changes are detected
```
