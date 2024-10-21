<!--- This EventEmitter was auto-generated using "npx sky readme" --> 

# [Sky Docs](../../README.md)

[Overview](..%2F..%2Fdocs%2FREADME.md)   
[Packages](..%2F..%2F%40pkgs%2FREADME.md)   
[Platform](..%2F..%2F%40platform%2FREADME.md)   
[cameras](..%2F..%2Fcameras%2FREADME.md)   
[components](..%2F..%2Fcomponents%2FREADME.md)   
[Crypto](..%2F..%2Fcrypto%2FREADME.md)   
[Features](..%2F..%2Ffeatures%2FREADME.md)   
**[Helpers](..%2F..%2Fhelpers%2FREADME.md)**   
* **[EventEmitter](..%2F..%2Fhelpers%2FEventEmitter%2FREADME.md)**
* [Loop](..%2F..%2Fhelpers%2FLoop%2FREADME.md)
* [PromisesPool](..%2F..%2Fhelpers%2FPromisesPool%2FREADME.md)
* [globalify](..%2F..%2Fhelpers%2Fglobalify%2FREADME.md)
* [idle](..%2F..%2Fhelpers%2Fidle%2FREADME.md)
* [times](..%2F..%2Fhelpers%2Ftimes%2FREADME.md)
  
[Standard](..%2F..%2Fstandard%2FREADME.md)   

# [Helpers](..%2F..%2Fhelpers%2FREADME.md) / EventEmitter [(Source)](..%2F..%2Fhelpers%2FEventEmitter%2F)

## Depends

standard   

## Examples

```typescript
import 'helpers/EventEmitter/global'

const eventEmitter = new EventEmitter()
const dispose = eventEmitter.on('test', () => console.log('test'))
eventEmitter.emit('test') // fire event
dispose()

```

Inheritance

```typescript
import 'helpers/EventEmitter/global'

class Test extends EventEmitter {}
const test = new Test()
const dispose = test.on('test', () => console.log('test'))
test.emit('test') // fire event
dispose()

```

Extend

```typescript
import 'helpers/EventEmitter/global'

const test = EventEmitter.extend(() => {
    console.log('I am a function!')
})
const dispose = test.on('test', () => console.log('test'))
test.emit('test') // fire event
dispose()

test()

```