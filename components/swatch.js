'use client';
import { SwatchFont } from '../components/swatchfont';
import { useState } from "react";
import { FontPreview } from '../components/typepreview';
import chroma from 'chroma-js';

export function Swatch({ fontFamily, backgroundColor, text, hexCode }) {

    const [copied, setCopied] = useState(false);

    const swatchbase = { // this is the base style for the swatch tile ( square )
        color: chroma(backgroundColor).luminance() < 0.5 ? 'white' : 'black',
        backgroundColor: backgroundColor || "#f4f7f7",
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center',
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(hexCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000); // Reset "Copied!" after 1s
        });
    };

    return ( // this is the physical square that is being rendered
        <div style={swatchbase} onClick={handleCopy} className="h-[100px] w-[50%] sm:h-[100px] sm:w-[100px] md:h-[10vw] md:w-[10vw] lg:h-[10vw] lg:w-[10vw]">
            <SwatchFont fontFamily={fontFamily} />
            <div style={{ marginTop: '0.5rem' }}>
                {copied ? "Copied!" : hexCode.toUpperCase()}
            </div>
        </div>
    );
}









