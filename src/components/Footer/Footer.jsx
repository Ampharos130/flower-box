import './Footer.css'

function Footer(){
    return(
        <div className='FooterDiv'>
            <footer>
            <img src="https://i.imgur.com/KxfWH9J.png" alt="Logo here" className='footerImg'/>
            <div>
                <h5>customer service</h5>
                <li>SATISFCATION COMMITMENT</li>
                <li>DELIVERY POLICIES</li>
                <li>CANCELLATIONS</li>
                <li>RETURN POLICY</li>
            </div>
            <div>
                <h5>flower box</h5>
                <li>TERMS OF SERVICE</li>
                <li>PRIVACY POLICY</li>
                <li>CAREER OPPORTUNITIES</li>
                <li>MORE INFORMATION</li>
            </div>
            </footer>
        </div>
    );
}

export default Footer;