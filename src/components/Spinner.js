import '../styles/components/Spinner.css';

export default function Spinner () {
    return (
    
      <div className="spinnerBg">
          <div className="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="spinner" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
      </div>
    )
  }
