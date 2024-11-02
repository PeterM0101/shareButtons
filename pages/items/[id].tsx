import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";

const pictureLinkMapping : {[key: string]: string}= {
    "1": "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "2": "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",}

const ItemPage = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
           <h1>Item Page {id}</h1>
            <Image src={pictureLinkMapping?.[id as string ?? "1"]} alt={""} />
        </div>
    );
};

    export default ItemPage;