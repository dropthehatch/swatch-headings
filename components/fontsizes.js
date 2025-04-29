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
            className="border p-2 rounded w-full shadow-md"
        />
    )

}

export function HeadingGenerator({ text, selectedFont }) {

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    return (

        <div className="min-h-96">
            <h1 className='text-5xl font-black' style={{ fontFamily: selectedFont }}>{text.toUpperCase()}</h1>
            <h2 className='text-4xl font-bold' style={{ fontFamily: selectedFont }}>{text.toUpperCase()}</h2>
            <h3 className='text-3xl font-medium' style={{ fontFamily: selectedFont }}>{text}</h3>
            <h4 className='text-2xl' style={{ fontFamily: selectedFont }}>{text.toLowerCase()}</h4>
            <h5 className='text-xl' style={{ fontFamily: selectedFont }}>{text}</h5>
            <p className='text-base' style={{ fontFamily: selectedFont }}>{text}</p>
            <span className='text-sm font-thin' style={{ fontFamily: selectedFont }}>{text}</span>
        </div>

    );
}

export function FontSizes({ fontFamily }) {
    const [selectedFont, setSelectedFont] = useState('Arial');
    const [text, setText] = useState('');

    return (
        <div className="m-10 w-5x1 fontdropdown grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ">
            <div className="sm:col-span-1 md:col-span-1">
                <FontDropdown selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
            </div>
            <div className="sm:col-span-1 md:col-span-3">
                <HeadingDropdown text={text} setText={setText} />
            </div>
            <div className="sm:col-span-6">
                <HeadingGenerator text={text} selectedFont={selectedFont} />
            </div>
        </div>
    );
}



