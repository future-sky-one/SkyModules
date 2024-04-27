import Move3Able from 'ables/Move3Able'
import Position3Able from 'ables/Position3Able'
import { Vector3 } from 'three/src/math/Vector3'

export default class Movement3System {
    static Components = {
        entities: [Position3Able, Move3Able],
    }

    entities: {
        Position3Able: Position3Able
        Move3Able: Move3Able
    }[] = []

    run(dt: number): void {
        this.entities.forEach(entity => {
            const position = entity.Position3Able
            const movement = entity.Move3Able

            position.add(new Vector3().copy(movement).multiplyScalar(dt / 1000))
        })
    }

    update(entity: Move3Entity): void {
        const movement = entity.Move3Able
        const friction = entity.LinearFriction3Able

        movement.sub(new Vector3().copy(movement).multiplyScalar(friction.value / 100))
    }
}