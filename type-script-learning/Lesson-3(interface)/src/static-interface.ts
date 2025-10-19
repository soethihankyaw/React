interface CameraInterface { 
    takePicture():void
}

interface CameraConstructor {
    new(lence : [number, number]) : CameraInterface
}

function createCamera(cons:CameraConstructor, lence: [number, number]): CameraInterface {
    return new cons(lence)

}

const CameraConstructor:CameraConstructor = class Camera implements CameraInterface {
    constructor(public lence:[number, number]) {
        
    }

    takePicture(): void {
        console.log(`Camera has taken picture`)
    }
}

let camera = createCamera(CameraConstructor, [20, 120])

camera.takePicture