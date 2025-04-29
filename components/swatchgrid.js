'use client';

import { useState } from 'react';
import { SwatchFont } from '../components/swatchfont';
import { FontDropdown } from '../components/fontdropdown';
import { SwatchColor } from './swatchcolor';
import { Swatch } from '../components/swatch';
import chroma from 'chroma-js';
import { FontPreview } from './typepreview';


// components/swatchgrid.js

function isValidHex(color) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}


export function Swatchgrid({ fontFamily }) {
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [inputColor, setInputColor] = useState('#3498db');
    const [text, setText] = useState('');

    const generateSwatches = (color) => {
        if (isValidHex(color)) {
            return chroma.scale([
                chroma('white'),
                chroma(color).brighten(2.5),
                chroma(color).brighten(1.5),
                chroma(color).brighten(1),
                chroma(color).brighten(.5),
                chroma(color),
                chroma(color).darken(2),
                chroma(color).darken(2.5)
            ])
                .mode('lab')
                .colors(8);
        } else {
            console.warn("Invalid hex input, showing fallback colors.");
            return ['#ffffff', '#fbfbfb', '#c8c8c8', '#afafaf', '#979797', '#808080', '#2b2b2b', '#191919'];
        }
    };

    const swatches = generateSwatches(inputColor);

    return (
        <div className="m-10 w-5x1 fontdropdown">
            <div className="my-4 flex flex-wrap">
                <div className="w-30 mr-8">
                    <SwatchColor inputColor={inputColor} setInputColor={setInputColor} />
                </div>
            </div>

            <div className="flex justify-start flex-wrap">
                {swatches.map((color, index, hexCode) => (
                    <Swatch
                        key={index}
                        fontFamily={selectedFont}
                        backgroundColor={color}
                        /** text={text || "Preview Text"} **/
                        hexCode={color}
                    />
                ))}
            </div>
        </div>
    );
}
