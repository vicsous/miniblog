import Navbar from '../components/Navbar.js';
import Menu from '../components/Menu.js';
import { useState } from 'react';

import '../styles/components/Header.css';

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar setOpen={setOpen} open={open} />
            { open ? <Menu setOpen={setOpen} open={open} /> : <></>}
        </>
    )
}