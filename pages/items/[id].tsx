import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Shared from "@/components/shared";
import {GetServerSideProps, GetServerSidePropsContext} from "next";
import picture from '../../public/lookingForNewJob.png'

const pictureLinkMapping: { [key: string]: any } = {
    "1": picture,
    "2": "https://plus.unsplash.com/premium_photo-1697477565728-d54c716b51d4?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "3": "https://plus.unsplash.com/premium_photo-1697477564565-2a95d76e921a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

type Props = {
    id: string;
    fullUrl: string;
    itemTitle: string;
    imageUrl: string;
};

const ItemPage = ({ id, fullUrl, itemTitle, imageUrl }: Props) => {
    console.log(
        `Item Page ${id}`,
        fullUrl,
        itemTitle,
        imageUrl)

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
                {/*<meta property="og:url" content={fullUrl}/>*/}
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
            <Shared />
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