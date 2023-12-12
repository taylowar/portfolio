import React from 'react';

export default function Footer() {
    return (
        <footer className="mb-10 block px-4 text-center text-gray-400">
            <small className="mb-2 text-xs">
                &copy; 2023 Tilen Okretic. All rights reserved.
            </small>
            <p className="text-xs">
                <b>About the website:</b> Built with Next13 and other
                components. Hoasted on Vercel.
            </p>
        </footer>
    );
}
