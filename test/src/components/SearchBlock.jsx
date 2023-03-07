import "@esri/calcite-components/dist/components/calcite-block"
import { CalciteBlock } from '@esri/calcite-components-react';
import React, { useEffect, useRef } from 'react'
import Search from '@arcgis/core/widgets/Search'

const SearchBlock = ({ view }) => {

    const searchRef = useRef(null);
    useEffect(() => {

        view?.when(() => {
            new Search({
                view,
                container: searchRef.current
            });
        });

    }, [view])


    return (
        <CalciteBlock heading='Find Location' collapsible>
            <div ref={searchRef}></div>
        </CalciteBlock>
    )
}

export default SearchBlock