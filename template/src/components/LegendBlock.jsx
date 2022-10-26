import "@esri/calcite-components/dist/components/calcite-block"
import { CalciteBlock } from '@esri/calcite-components-react';
import React, { useEffect, useRef } from 'react'
import Legend from '@arcgis/core/widgets/Legend'

const LegendBlock = ({view}) => {
    
    const legRef = useRef(null);
    useEffect(()=> {
      view?.when( () => {
				new Legend({
					view,
					container: legRef.current
				});
			});
    }, [view])

    
  return (
    <CalciteBlock heading='Legend' collapsible>
          <div ref={legRef}></div>
    </CalciteBlock>
  )
}

export default LegendBlock