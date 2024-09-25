import 'features/effect/global'

import * as Three from './_three'

export default Three

export function inScene(object: Three.Object3D, scene: Three.Scene, deps: EffectDeps): Effect {
    return new Effect(() => {
        scene.add(object)

        return () => {
            scene.remove(object)
        }
    }, deps)
}
