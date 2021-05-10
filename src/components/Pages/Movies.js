import React from 'react';
import ComingSoon from '../../Images/comingSoon.jpg';
import '../../style/ComingSoon.scss';

const Movies = () => {
    return (
        <div className="comingSoon">
            <img src={ComingSoon} alt="coming soon" ></img>
        </div>
    )
}

export default Movies;