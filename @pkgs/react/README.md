<!--- This React was auto-generated using "npx sky readme" --> 

# [Sky Docs](../../README.md)

[Overview](..%2F..%2Fdocs%2FREADME.md)   
**[Packages](..%2F..%2F%40pkgs%2FREADME.md)**   
* [Fresnel](..%2F..%2F%40pkgs%2F%40artsy%2Ffresnel%2FREADME.md)
* [ClickHouse Client Node](..%2F..%2F%40pkgs%2F%40clickhouse%2Fclient-node%2FREADME.md)
* [ClickHouse Client Web](..%2F..%2F%40pkgs%2F%40clickhouse%2Fclient-web%2FREADME.md)
* [React Query](..%2F..%2F%40pkgs%2F%40tanstack%2Freact-query%2FREADME.md)
* [Argon 2](..%2F..%2F%40pkgs%2Fargon2%2FREADME.md)
* [Args](..%2F..%2F%40pkgs%2Fargs%2FREADME.md)
* [Express](..%2F..%2F%40pkgs%2Fexpress%2FREADME.md)
* [Express Http Proxy](..%2F..%2F%40pkgs%2Fexpress-http-proxy%2FREADME.md)
* [Json Web Token](..%2F..%2F%40pkgs%2Fjsonwebtoken%2FREADME.md)
* **[React](..%2F..%2F%40pkgs%2Freact%2FREADME.md)**
  
[Platform](..%2F..%2F%40platform%2FREADME.md)   
[cameras](..%2F..%2Fcameras%2FREADME.md)   
[components](..%2F..%2Fcomponents%2FREADME.md)   
[Crypto](..%2F..%2Fcrypto%2FREADME.md)   
[Features](..%2F..%2Ffeatures%2FREADME.md)   
[Helpers](..%2F..%2Fhelpers%2FREADME.md)   
[Standard](..%2F..%2Fstandard%2FREADME.md)   

# [Packages](..%2F..%2F%40pkgs%2FREADME.md) / React [(Source)](..%2F..%2F%40pkgs%2Freact%2F)

## [npm](https://www.npmjs.com/package/react)

## Without Global Import

```tsx
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)

```

## With Global Import

```typescript
globalify({
    React,
    act,
    cloneElement,
    createContext,
    createElement,
    createRef,
    forwardRef,
    isValidElement,
    lazy,
    memo,
    startTransition,
    useCallback,
    useContext,
    useDebugValue,
    useDeferredValue,
    useEffect,
    useId,
    useImperativeHandle,
    useInsertionEffect,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useSyncExternalStore,
    useState,
    useTransition,
})

```

```typescript
import '@pkgs/react/global'

```