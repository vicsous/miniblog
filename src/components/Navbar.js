import '../styles/components/Navbar.css';
import { useHistory } from "react-router-dom";

export default function Navbar({open, setOpen}) {
    let history = useHistory();
    function handleBack() {
        setOpen(false)
        history.goBack()
    }
    return (
    <nav className="navbar">
        <button className='menuBtn' onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </button>
        <div className='logo'>
            MiniBlog
        </div>
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
    </nav>)
}
