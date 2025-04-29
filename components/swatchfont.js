'use client';
import { useState } from "react";
import { FontPreview } from '../components/typepreview';  

export function SwatchFont({ fontFamily, text }) {
    return (
        <p style={{ fontFamily }}>
            {text}
        </p>
    )
}
