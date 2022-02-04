import Header from './Header.js';
import Footer from './Footer.js';
import '../styles/components/Layout.css';

export default function Layout ({children}) {
    return (
        <>
            <Header />
                <main className='main'>
                    {children}       
                </main>
            <Footer />
        </>
    )
}