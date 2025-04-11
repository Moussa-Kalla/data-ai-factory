import React, { useState, useEffect } from "react";
import { useCookie } from "../hooks/useCookie";

const CookieManager = () => {
    const [consent, setConsent] = useCookie("cookie_consent", "");
    const [showBanner, setShowBanner] = useState(consent === "");

    useEffect(() => {
        if (consent !== "") setShowBanner(false);
    }, [consent]);

    const handleConsent = (value: string) => {
        setConsent(value);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg p-4 rounded-xl z-50 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-gray-800">
            <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences à tout moment.{" "}
                <a href="/politique-de-confidentialite" className="text-blue-600 underline">En savoir plus</a>.
            </p>
            <div className="flex gap-2">
                <button
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                    onClick={() => handleConsent("refused")}
                >
                    Refuser tout
                </button>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => handleConsent("essential")}
                >
                    Essentiels uniquement
                </button>
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    onClick={() => handleConsent("all")}
                >
                    Accepter tout
                </button>
            </div>
        </div>
    );
};

export default CookieManager;