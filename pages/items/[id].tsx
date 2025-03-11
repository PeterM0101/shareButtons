import React, {useEffect, useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import Shared from "../../components/shared";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import {useRouter} from "next/router";
import {Button} from "@mui/material";
import { push } from "@socialgouv/matomo-next";

const pictureLinkMapping: { [key: string]: string } = {
    "1": "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "2": "https://plus.unsplash.com/premium_photo-1697477565728-d54c716b51d4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "3": "https://plus.unsplash.com/premium_photo-1697477564565-2a95d76e921a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

// type Props = {
//     id: string;
//     fullUrl: string;
//     itemTitle: string;
//     imageUrl: string;
// };

const ItemPage = () => {

    const router = useRouter();
    const [fullUrl, setFullUrl] = useState('');

    const { id } = router.query as { id: string };
    const itemTitle = `Item Page ${id}`;
    const imageUrl = pictureLinkMapping?.[id] ?? pictureLinkMapping["1"];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fullUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;
            setFullUrl(fullUrl);
        }

        if (typeof window !== "undefined" && typeof window.Matomo !== "undefined") {
            console.log("Matomo is loaded and ready to use!");
        } else {
            console.warn("Matomo is not available.");
        }

    }, []);

    const itemPostJsonLd = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "itemPosting",
        title: itemTitle,
        description: "Nice description of the item "+itemTitle,
    });

    return (
        <div className='flex flex-col justify-center items-center h-screen w-screen gap-8'>
            <Head>
                <title>{itemTitle}</title>
                <meta property="og:title" content={itemTitle}/>
                <meta property="og:image" content={imageUrl}/>
                <meta property="og:url" content={fullUrl}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content={`Check out this amazing item: ${id}`}/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={itemTitle}/>
                <meta name="twitter:description" content={`Check out this amazing item twitter: ${id}`}/>
                <meta name="twitter:image" content={imageUrl}/>
                <script
                    key="job-post-json-ld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: itemPostJsonLd}}
                ></script>
            </Head>
            <h1 className={'text-5xl font-bold'}>{itemTitle}</h1>
            <Button id="click-button" variant='contained' >Click</Button>
            <Button id="push-button" variant='outlined' color='success' onClick={() => {
                push(["trackEvent", "Button", 'click', "call #111222", 'user #333'])
            }}>Phone</Button>
            <div className='relative w-[800px] h-[600px]'>
                <Image
                    src={imageUrl}
                    alt={itemTitle}
                    fill
                    className='object-cover'
                    sizes={'800px'}
                    priority
                />
            </div>
            <Shared url={fullUrl}/>
        </div>
    );
};

export default ItemPage;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { id } = context.params as { id: string };

    const itemTitle = `Item Page ${id}`;
    const imageUrl = pictureLinkMapping?.[id] ?? pictureLinkMapping["1"];
    const fullUrl = `https://${context.req.headers.host}/item/${id}`;

    return {
        props: {
            id,
            itemTitle,
            imageUrl,
            fullUrl
        }
    };

}