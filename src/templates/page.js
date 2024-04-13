import React from 'react';
import  { BlockRendererProvider } from "@webdeveducation/wp-block-tools"
import BlockRendererComponent from '../config/BlockRendererComponent';


const Page = (props) => {
    console.log("Page Props: ", props);
    return <BlockRendererProvider allBlocks={props.pageContext.blocks} renderComponent={BlockRendererComponent}
    />;
}

export default Page;
