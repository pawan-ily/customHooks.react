import React, { useState, useEffect } from "react";

export default function Status() {
    const [online, setOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        function handleOnline() {
            setOnline(true);
        }

        function handleOffline() {
            setOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <>
            <p>
                <h1>{online ? '✅ Online' : '❌ Disconnected'}</h1>
            </p>
        </>
    );
}
