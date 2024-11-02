import { useRouter } from 'next/router';
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Ensure router is ready
        if (router.isReady) {
            void router.push('/items/1');
        }
    }, [router.isReady]);

    return null;
}