import React from "react";
import { useCookie } from "../hooks/useCookie";

export const CookieConsent = () => {
    const [consent, setConsent] = useCookie("cookie_consent", "false");

    if (consent === "true") return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg p-4 rounded-xl z-50 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <p className="text-sm text-gray-800">
                Nous utilisons des cookies pour améliorer votre expérience sur BayanAI.
            </p>
            <div className="flex gap-2">
                <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                    onClick={() => setConsent("false")}
                >
                    Refuser
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => setConsent("true")}
                >
                    Accepter
                </button>
            </div>
        </div>
    );
};