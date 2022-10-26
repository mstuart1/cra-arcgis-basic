import LayerList from '@arcgis/core/widgets/LayerList'

const addLayerList = (view, container) => {
    let layerList = new LayerList({
        view,
        container
    })
}

export default addLayerList