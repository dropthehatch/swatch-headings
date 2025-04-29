'use client';
import React, { useState } from 'react';
import {SwatchFont} from './swatchfont';

export function SwatchColor({ inputColor, setInputColor }) {
    const handleChange = (e) => {
        setInputColor(e.target.value); // Directly update the parent
    };

    return (
        <input
            className='shadow-md'
            type="text"
            value={inputColor}
            onChange={handleChange}
            placeholder="#3498db"
            style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                boxSizing: 'border-box',
                color: 'black',
                border: '1px solid black'
            }}
        />
    );
}
