import {useEffect, useState} from "react";
import cx from "classnames";

export default function FlashMessage({message, type, uuid}: {message: string, type: string, uuid: string}) {
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
        setMessageText(message);
    }, [uuid]);

    useEffect(() => {
        if (messageText === '') {
            return;
        }

        const timeout = setTimeout(() => {
            setMessageText('');
        }, 4000);

        return () => clearTimeout(timeout);
    }, [messageText]);

    if (messageText) {
        return (
            <div className={cx({
                "fixed bottom-6 right-6 py-4 px-10": true,
                "bg-green-500": type === 'success',
                "bg-red-500": type === 'error',
            })}>
                {message}

                <div className="absolute top-1 right-1 cursor-pointer" onClick={() => setMessageText('')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        )
    } else {
        return null;
    }
}
