import React from "react";

const PolitiqueConfidentialite = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 text-gray-800">
            <h1 className="text-2xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="mb-2">
                Chez BayanAI, nous respectons votre vie privée. Nous collectons uniquement les données nécessaires à la fourniture de nos services.
            </p>
            <h2 className="text-xl font-semibold mt-4 mb-2">Cookies utilisés :</h2>
            <ul className="list-disc list-inside">
                <li><strong>Essentiels :</strong> Maintien de la session utilisateur.</li>
                <li><strong>Statistiques :</strong> Analyse de l’utilisation du site pour améliorer nos services.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-4 mb-2">Gestion de vos données :</h2>
            <p>
                Vous pouvez gérer vos préférences de cookies à tout moment en cliquant sur "Gérer mes cookies" en bas de page.
            </p>
            <p className="mt-2">
                Pour toute question, vous pouvez nous contacter à : <a href="contact.bayanai@gmail.com" className="text-blue-600 underline">contact.bayanai@gmail.com</a>
            </p>
        </div>
    );
};

export default PolitiqueConfidentialite;