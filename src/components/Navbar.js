import '../styles/components/Navbar.css';

export default function Navbar({open, setOpen}) {
    return (
    <nav className="navbar">
        <div className='menuBtn' onClick={() => setOpen(!open)}>
            {open?  <button><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg></button> :
            <button className="space-y-2 pointer">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
            </button>
          }
        </div>
        <div className='logo'>
            MiniBlog
        </div>
    </nav>)
}