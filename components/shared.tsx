import React, {useEffect, useState} from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "next-share";
import {useRouter} from "next/router";

const Shared = () => {
    const router = useRouter();
    const [fullUrl, setFullUrl] = useState('');
    console.log(
        'fullUrl',
        fullUrl)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const fullUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;
            setFullUrl(fullUrl);
        }
    }, [router.asPath]);

    return (
        <div
            className={`flex justify-center items-center gap-2`}
        >
            <FacebookShareButton
                url={fullUrl}
                quote={'Fuck next-s.'}
                hashtag={'#nextshare'}
            >
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton
                url={fullUrl}
                title={'Fuck.'}
            >
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <LinkedinShareButton url={fullUrl}>
                <LinkedinIcon size={32} round/>
            </LinkedinShareButton>
        </div>
    );
};

export default Shared;