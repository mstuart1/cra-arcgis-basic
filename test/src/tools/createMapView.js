import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'

const createMapView = (
    mapProps = {
        basemap: 'topo-vector'
    },
    viewProps = {
        center: [-74.5, 40],
        zoom: 9,
    }
) => {
    const map = new ArcGISMap(mapProps)
    const view = new MapView({ ...viewProps, map })
    view.ui.move('zoom', 'bottom-right')
    return view
}

export default createMapView