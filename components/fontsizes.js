'use client';

import { useState } from 'react';
import { SwatchFont } from '../components/swatchfont';
import { FontDropdown } from '../components/fontdropdown';
import { FontPreview } from './typepreview';

// Helper function to capitalize first letter of each word
function capitalizeEachWord(text) {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function HeadingDropdown({ text, setText }) {

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Enter your heading text..."
            value={text}
            onChange={handleInputChange}
            className="border p-2 rounded w-full "
        />
    )

}

export function HeadingGenerator({ text, selectedFont }) {

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (

        <div className="h-96">
            <h1 style={{ fontFamily: selectedFont }}>{text.toUpperCase()}</h1>
            <h2 style={{ fontFamily: selectedFont }}>{text.toUpperCase()}</h2>
            <h3 style={{ fontFamily: selectedFont }}>{text}</h3>
            <h4 style={{ fontFamily: selectedFont }}>{text.toLowerCase()}</h4>
            <h5 style={{ fontFamily: selectedFont }}>{text}</h5>
        </div>

    );
}

export function FontSizes({ fontFamily }) {
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [text, setText] = useState('');

    return (
        <div className="m-10 w-5x1 fontdropdown gap-8 grid grid-cols-6">
            <div className="col-span-1">
                <FontDropdown selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
            </div>
            <div className="col-span-2">
                <HeadingDropdown text={text} setText={setText} />
            </div>
            <div className="col-span-6 -mt-8">
                <HeadingGenerator text={text} selectedFont={selectedFont} />
            </div>
        </div>
    );
}



