import React from 'react';
import './Footer.scss';

import { Footer } from 'react-materialize';
import instagram from '../../assets/images/icons/instagram.png';
import linkedin from '../../assets/images/icons/linkedin.png';
import facebook from '../../assets/images/icons/facebook.png';

const footer = () => {
    return (
        <Footer
            className="example"
            copyrights="Copyright © 2020 The Cake Designer - All rights reserved© "
            links={<ul>
                <li><a className="grey-text text-lighten-1" href="/">Visit our gallery</a></li>
                <li><a className="grey-text text-lighten-1" href="/">Be part of our team</a></li>
                </ul>}
            moreLinks={<span>
                <a className="grey-text text-lighten-4 right" href="#!"><img className="Icon" src={facebook} alt={'facebook'}/></a>
                <a className="grey-text text-lighten-4 right" href="#!"><img className="Icon" src={instagram} alt={'instagram'}/></a>
                <a className="grey-text text-lighten-4 right" href="#!"><img className="Icon" src={linkedin} alt={'linkedin'}/></a>
            </span>
               }
            >
            <h5 className="white-text">
                Contact us
            </h5>
            <div className="grey-text text-lighten-4">
                <p>tel: 064/2334-332</p>
                <p>Majevička 23, Novi Sad</p>
            </div>
        </Footer>
    )
}
export default footer;