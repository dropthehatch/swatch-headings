"use client";
import { useState } from "react";


export function FontPreview({ text = '', setText }) {
    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <input
            type="text"
            value={text || ''}
            onChange={handleChange}
            placeholder="Preview Font Here"
            style={{
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '100%',
                boxSizing: 'border-box',
            }}
        />
    );
}