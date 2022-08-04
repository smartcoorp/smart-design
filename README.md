# Smartcookie design system

Smartcookie desing system

## 💻 Getting started

1. Generate .env file with the next configurations:

```javascript
SKIP_PREFLIGHT_CHECK=true
GH_TOKEN={github access token}
NPM_TOKEN={npm access token}
```

## 📁 Create new folder in src

1. Create the new folder under `./src` (example: `hooks`)
2. Add relative paths to `tsconfig.json`

```json
"paths":{
    ...,
    "@hooks": ["./src/styles/index.ts"],
}
```

3. Add exports and typeversions to `package.json`

```json
"exports": {
   "./hooks": "./dist/hooks/index.js"
},
"typesVersions":{
    ...,
    "hooks": [
        "dist/hooks/index.d.ts"
    ],
}
```

4. Add `tsconfig` relative paths to `jest.config.js`

```javascript
moduleNameMapper: {
    ...,
"@hooks": ["<rootDir>/styles/index.ts"],
},
```
