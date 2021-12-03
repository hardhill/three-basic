import { createCamera } from "../components/camera"
import { Cube } from "../components/Cube"
import { createLight } from "../components/light"
import { createScene } from "../components/scene"
import { Loop } from "../systems/Loop"
import { createRenderer } from "../systems/renderer"
import { Resizer } from "../systems/Resizer"

let scene:THREE.Scene
let camera:THREE.PerspectiveCamera
let renderer:THREE.WebGLRenderer
let loop:Loop
export class World{
    constructor(container:Element){
       scene = createScene()
       camera = createCamera()
       renderer = createRenderer()
       container.append(renderer.domElement)
       loop = new Loop(camera,scene,renderer)

       const cube = new Cube()
       const light = createLight()
       loop.addObject(cube)
       scene.add(light)
       scene.add(cube)

       
       
       const resizer = new Resizer(container,camera,renderer)
       resizer.onResize = ()=>{
           //this.render()
       }
    }

    public render(){
        renderer.render(scene,camera)
    }

    public start(){
        loop.start()
    }

    public stop(){
        loop.stop()
    }
}