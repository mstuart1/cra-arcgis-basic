import "@esri/calcite-components/dist/components/calcite-block"
import { CalciteBlock } from '@esri/calcite-components-react';
import React, { useEffect, useRef } from 'react'
import BasemapGallery  from '@arcgis/core/widgets/BasemapGallery'

const BasemapBlock = ({view}) => {
    
    const baseRef = useRef(null);
    useEffect(()=> {
      view?.when( () => {
				new BasemapGallery({
					view,
					container: baseRef.current
				});
			});
    }, [view])

    
  return (
    <CalciteBlock heading='Basemap Gallery' collapsible>
          <div ref={baseRef}></div>
    </CalciteBlock>
  )
}

export default BasemapBlock