import React from "react";
import { BlockRenderer, getClasses, getStyles } from "@webdeveducation/wp-block-tools";
import { MediaText } from "../components";

export const BlockRendererComponent = (block) => {
    switch (block.name) {
        case "core/media-text":
            console.log("Render component: ", block);
            return <MediaText key={block.id} 
            className={getClasses(block)} 
            style={getStyles(block)} 
            verticalAlignment={block.attributes.verticalAlignment}
            gatsbyImage={block.attributes.gatsbyImage}
            mediaPosition={block.attributes.mediaPosition }
            >
                <BlockRenderer blocks={block.innerBlocks}/>
                </MediaText>
    }
}