// import WebMap from '@arcgis/core/Map'
import WebMap from '@arcgis/core/WebMap'
import MapView from '@arcgis/core/views/MapView'
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery'
import Bookmarks from '@arcgis/core/widgets/Bookmarks'
import LayerList from '@arcgis/core/widgets/LayerList'
import Legend from '@arcgis/core/widgets/Legend'
import Print from '@arcgis/core/widgets/Print'
import { setMapTitle } from '../mapTitle/actions'

export const INIT_MAP_TRY = 'INIT_MAP_TRY'
export const initMapTry = () => {
	return {
		type: INIT_MAP_TRY
	}
}
export const INIT_MAP_SUCCEED = 'INIT_MAP_SUCCEED'
export const initMapSucceed = data => {
	return {
		type: INIT_MAP_SUCCEED,
		payload: { data }
	}
}
export const INIT_MAP_FAIL = 'INIT_MAP_FAIL'
export const initMapFail = () => {
	return {
		type: INIT_MAP_FAIL
	}
}
export const SET_VIEW_PADDING = 'SET_VIEW_PADDING'
export const setViewPadding = expanded => {
	return {
		type: SET_VIEW_PADDING,
		payload: {expanded}
	}
}

export const initMapReq = () => {
	return async (dispatch, getState) => {
		dispatch(initMapTry());
		
		try {
			
			const webmapId = new URLSearchParams(window.location.search).get("webmap")
        ?? "cc3bd744b9a44feaa493dd867a1d48dd";

      const webmap = new WebMap({
        portalItem: {
          id: webmapId
        }
      });
			const view = new MapView({
				map: webmap,
				
				padding: {
					left: 49
					// left: actionBarExpanded ? 135 : 45
				}
			});
			view.ui.move("zoom", "top-left");
			const basemaps = new BasemapGallery({
				view,
				container: "basemaps-container"
			});
			const bookmarks = new Bookmarks({
				view,
				container: "bookmarks-container"
			});
			const layerList = new LayerList({
				view,
				selectionEnabled: true,
				container: "layers-container"
			});
			const legend = new Legend({
				view,
				container: "legend-container"
			});
			const print = new Print({
				view,
				container: "print-container"
			});

			webmap.when(() => {
				dispatch(initMapSucceed(view))
			})
			
			


		} catch (err) {
			dispatch(initMapFail());
			console.log('initMapReq.error:', err.message)
		}

	};
}