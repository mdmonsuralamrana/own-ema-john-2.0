import React from 'react';
import { FaStar, FaStarHalfAlt, } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './Star.css';

const Star = ({ rating, ratingsCount }) => {

    const ratingStar = Array.from({ length: 5 }, (v, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    rating >= index + 1
                        ? (<FaStar className="icon" />)
                        : rating >= number
                            ? (<FaStarHalfAlt className="icon" />)
                            : (<AiOutlineStar className="empty-icon" />)
                }

            </span>
        )

    });



    return (
        <>
            <div className="icon-style">
                {ratingStar}
                <p> <small>({ratingsCount} customer reviews)</small></p>
            </div>
        </>
    );

};

export default Star;