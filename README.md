# typescript-projects-apps

No brainer sample of splitting vanilla JavaScript (no framework, no Webpack) code into new projets feature in TypeScript.

Say you have a plain, non-yet ES6 migrated, TypeScript (mixed with JavaScript) pool of applications you would like to migrate to ES6 using only `tsc` compiler (no `Webpack` or `Rollup` whatsoever).

The new TypeScript `3.*` features like projects and `--build` option, allow to split such pool of applications into modern hierarchy, similar to monorepo concepts like one imposed by Narwal's `nx` schematics.

## Using

### Building manager app

```shell
npx tsc -b --verbose  src/manager/tsconfig.json
```

### Builder viewer app

```shell
npx tsc -b --verbose  src/viewer/tsconfig.json
```

## Author

@peterblazejewicz
