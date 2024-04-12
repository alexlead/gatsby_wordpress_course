import React from 'react';
import  { BlockRendererProvider } from "@webdeveducation/wp-block-tools"


const Page = (props) => {
    console.log("Page Props: ", props);
    return <BlockRendererProvider allBlocks={props.pageContext.blocks}/>;
}

export default Page;
