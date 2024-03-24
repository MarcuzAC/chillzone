import { useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () =>{
    useEffect(() => {
        let isMounted = true;

        const warmUpBrowser = async () => {
            try {
                await WebBrowser.warmUpAsync();
            } catch (error) {
                // Handle any errors that occur during warm-up
                console.error('Error warming up browser:', error);
            }
        };

        const coolDownBrowser = async () => {
            try {
                await WebBrowser.coolDownAsync();
            } catch (error) {
                // Handle any errors that occur during cool-down
                console.error('Error cooling down browser:', error);
            }
        };

        warmUpBrowser();

        return () => {
            isMounted = false;
            if (isMounted) {
                coolDownBrowser();
            }
        };
    }, []);
};
