<!--- This sky init was auto-generated using "npx sky readme" --> 

# [Sky Docs](../../README.md)

**[Overview](..%2F..%2Fdocs%2FREADME.md)**   
* **[sky init](..%2F..%2Fdocs%2F1.sky-init%2FREADME.md)**
* [sky readme](..%2F..%2Fdocs%2F2.sky-readme%2FREADME.md)
* [sky desktop](..%2F..%2Fdocs%2Fsky-desktop%2FREADME.md)
* [sky mobile](..%2F..%2Fdocs%2Fsky-mobile%2FREADME.md)
* [sky node](..%2F..%2Fdocs%2Fsky-node%2FREADME.md)
* [sky web](..%2F..%2Fdocs%2Fsky-web%2FREADME.md)
  
[Packages](..%2F..%2F%40pkgs%2FREADME.md)   
[Platform](..%2F..%2F%40platform%2FREADME.md)   
[cameras](..%2F..%2Fcameras%2FREADME.md)   
[components](..%2F..%2Fcomponents%2FREADME.md)   
[Crypto](..%2F..%2Fcrypto%2FREADME.md)   
[Features](..%2F..%2Ffeatures%2FREADME.md)   
[Helpers](..%2F..%2Fhelpers%2FREADME.md)   
[Standard](..%2F..%2Fstandard%2FREADME.md)   

# [Overview](..%2F..%2Fdocs%2FREADME.md) / sky init [(Source)](..%2F..%2Fdocs%2F1.sky-init%2F)

# init all

`sky init`

# sky.config.ts

`sky init sky-config`

```typescript
export default {
    title: 'App Title',
    apps: {
        'app name': {
            path: '.',
            target: 'web',
            public: 'public',
        }
    },
    modules: {
        name: {
            path: 'module path',
        }
    },
    scripts: {
        some: 'some command',
    }
}

```

# tsconfig

`sky init tsconfig`

# .gitignore

`sky init gitignore`

# package.json

`sky init package`

# packages and lint configs

`sky init packages`