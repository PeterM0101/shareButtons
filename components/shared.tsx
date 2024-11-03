import React, {FC} from 'react';
// import {
//     FacebookIcon,
//     FacebookShareButton,
//     LinkedinIcon,
//     LinkedinShareButton,
//     TwitterIcon,
//     TwitterShareButton
// } from "next-share";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";

interface SharedProps {
    url: string;
}

const Shared: FC<SharedProps> = ({url}) => {

    return (
        <div
            className={`flex justify-center items-center gap-2`}
        >
            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round/>
            </LinkedinShareButton>
        </div>
    );
};

export default Shared;