class Control {
    // private touch:boolean
    value:string
    action:() => void
}

interface SelectableControls extends Control {
    readonly selected:boolean
}

function useControl(control:SelectableControls) {
    control.selected
    control.value
}

class Select implements SelectableControls {
    constructor(public value:string, readonly selected:boolean) {

    }

    action: () => void
}