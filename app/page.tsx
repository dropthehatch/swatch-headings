'use client';

import { useState } from 'react';
import { Header } from '../components/header.js';
import { Swatchgrid } from '../components/swatchgrid.js';
import { FontDropdown } from '../components/fontdropdown.js';
import { FontSizes } from '../components/fontsizes.js'
import { FontPreview } from '../components/typepreview';
import './globals.css';

export default function App() {
  const [selectedFont, setSelectedFont] = useState('Arial');
  const [text, setText] = useState('');

  return (
    <main>
      <Header />
      <Swatchgrid fontFamily={selectedFont} />
      <FontSizes fontFamily={selectedFont} text={text || "Preview Text"}  />
    </main>
  );
}
