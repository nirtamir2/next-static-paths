# `next-static-paths`

Statically prevent HTTP 404 Not Found in your Next.js applications using TypeScript and code generation.

## Usage

```sh-session
$ pnpm add next-static-paths
# or
$ yarn add next-static-paths
# or
$ npm install next-static-paths
```

Then, from within your Next.js application root, run the following command:

```sh-session
# For pnpm users
$ pnpx next-static-paths

# For yarn users
$ yarn next-static-paths

# For npm users
$ npx next-static-paths
```

It's recommended to configure scripts in your `package.json` too

```json
{
  "dev": "next-static-paths --pages-dir ./src --output . && next dev",
  "generate-routes": "next-static-paths --pages-dir ./src --output . && :"
}
```


### `TypedLink` component

```tsx
import { TypedLink } from "@nirtamir2/next-static-paths";
function MyComponent() {
  return (
    <TypedLink as="/some/[myArgument]" myArgument="hello world">
      Hello world
    </TypedLink>
  );
}
```

### `pathFor` helper

```tsx
import { pathFor } from "@nirtamir2/next-static-paths";

function getPath() {
  return pathFor("/some/[myArgument]", { myArgument: "hello world" });
}
```
