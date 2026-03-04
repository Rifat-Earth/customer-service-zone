import React from 'react';

const SingleCard = ({ customer }) => {
    console.log(customer);
    return (
        <div className="card w-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">Medium Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                
            </div>
        </div>
    );
};

export default SingleCard;