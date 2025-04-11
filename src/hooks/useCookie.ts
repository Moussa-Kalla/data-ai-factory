import { useState } from "react";

export function useCookie(name: string, defaultValue: string) {
    const getCookie = () => {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : defaultValue;
    };

    const [cookie, setCookieState] = useState<string>(getCookie());

    const setCookie = (value: string, days = 365) => {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
        setCookieState(value);
    };

    return [cookie, setCookie] as const;
}