import NavBar from './NavBar'
import './header.css'

function Header({signedIn, setSignedIn}) {

    return (

        <header className='header'>

            <div className="title-logo-container">
                <div className='fifteen-container'>
                    <div className='fifteen'>
                        15
                    </div>
                </div>
                <div className='title-nickel-container web-name'>
                    Nickel
                </div>
                <div className='title-point-container web-name'>
                    <span className='single-letter'>P</span>
                    <span className='target-point'></span>
                    <span className='single-letter'>i</span>
                    <span className='single-letter'>n</span>
                    <span className='single-letter'>t</span>
                </div>
            </div>
            <NavBar signedIn={signedIn} setSignedIn={setSignedIn}/>
        </header>
          
    );
}

export default Header;