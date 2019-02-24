import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {
        const { id, description, name, thumb_image_url, logo } = props.item;
    return (
        <div className="portfolio-item-wrapper">
            <img src={ thumb_image_url } />
            <img src={ logo } />

            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>{name}</Link>
        </div>
    )
}