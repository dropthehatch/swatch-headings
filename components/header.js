'use client';

import {Logo} from '../components/logo';
import {Headerlink} from '../components/headerlink';

export function Header() {
    return (
        <header className='grid grid-cols-2 gap-4'>
            <Logo />
        </header>
    );
}
