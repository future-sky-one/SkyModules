import '#/imports'
import SkyPerspectiveCamera from 'sky/cameras/SkyPerspectiveCamera'
import getCameraMouseProjection from 'sky/helpers/getCameraMouseProjection'
import transformMouseCoordinates from 'sky/helpers/transformMouseCoordinates'
import SkyRenderer from 'sky/renderers/SkyRenderer'

import styles from './index.module.scss'

const cx = cn('[index]', styles)
export class App extends EffectsRoot {
    renderer: SkyRenderer
    camera: SkyPerspectiveCamera
    scene: Three.Scene

    constructor() {
        super()

        const renderer = (this.renderer = new SkyRenderer(this, {
            size: (): [number, number] => [window.innerWidth, window.innerHeight],
        }))
        renderer.setClearColor('#2b2b2b', 1.0)

        const canvas = renderer.domElement
        document.querySelector('#root')!.before(canvas)
        cx`index-canvas` && canvas.classList.add(cx`index-canvas`)

        const camera = (this.camera = new SkyPerspectiveCamera(this))
        camera.position.z = 1000
        camera.updateProjectionMatrix()

        const scene = (this.scene = new Three.Scene())

        this.registerEmitUpdate(() => {
            renderer.render(scene, camera)
        })
            .registerEmitMouseEvents(mouse => {
                mouse = transformMouseCoordinates(mouse)
                const mouse3 = getCameraMouseProjection(camera, mouse)
                return mouse.copy(mouse3)
            })
            .registerEmitKeyboardEvents()

        //
        const container = new UI.Container(this)
        inScene(this.scene, container.view, [this, container])

        until(async () => {

            const button = new UI.Button(container, {
                text: 'Кнопка!',
                x: 0,
                y: 0,
                click(): void {
                    // eslint-disable-next-line no-console
                    console.log('click!')
                },
            })
            await button.promise
            container.add(button)
    
            const select = new UI.Select(container, {
                title: 'Select',
                x: 0,
                y: 10,
    
                options: [
                    {
                        name: 'Option 1',
                        value: 1,
                    },
                    {
                        name: 'Option 2',
                        value: 2,
                    },
                    {
                        name: 'Option 3',
                        value: 3,
                    },
                ],
            })
            await select.promise
            container.add(select)
        })
    }
}

new App()
