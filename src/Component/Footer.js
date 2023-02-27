import React from 'react';
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import './Css/FooterStyle.css'


const Footer=()=>{
return(
<>
<footer>
    <div className='container container-flex'>
        <div className='icons'>

        {/* <a href ="https://api.whatsapp.com/send?phone=254791441451&text"
              target="blank"className='listItems'activeClassName="activeItem">
                <WhatsAppIcon className='icon' /></a>

                <a href ="okinyirovince@gmail.com" target="_blank"
              className='listItems'activeClassName="activeItem">
                <EmailOutlinedIcon className='icon' /></a>

                <a href ="https://www.facebook.com/search/top?q=rovince%20technosoft%20limited."
                 target=""
              className='listItems'activeClassName="activeItem">Facebook
                </a>
                 */}

        </div>
        <div className='line'>
            <hr>
            </hr>
            <hr>
            </hr>
        </div>
        <div className='copyright'>
            <p>&copy;Copyright@2023 All Rights Reserved.</p>
            <p>Designed by Rovince Okinyi</p>
        </div>


    </div>

</footer>
</>

)
}
export default Footer;