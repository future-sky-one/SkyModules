import globalify from 'sky/helpers/globalify'
import { Object3D, Scene } from 'three/src/Three'
import * as module from 'three/src/Three'

declare global {
    class InScene extends Effect {
        constructor(object: Object3D, scene: Scene, deps: EffectDeps)
    }
}

@effect
class InScene extends Effect {
    constructor(object: Object3D, scene: Scene, deps: EffectDeps) {
        super(deps)

        scene.add(object)
        this.destroy = (): void => {
            scene.remove(object)
        }
    }
}

globalify({ ...module, InScene })