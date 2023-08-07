import "./SingleCartItem.css";
import React from 'react';
import { BsTrash } from 'react-icons/bs';

const SingleCartItem = (props) => {
    const { course_thumbnail, title, instructor, price } = props.singleItem;

    return (
        <div className="single-cart-item-container">
            <div className="image-and-title-container">
                <div className="course-image">
                    <img src={course_thumbnail} alt={title} />
                </div>
                <div className="course-title-instructor">
                    <div className="title">{title}</div>
                    <div className="instructor">by {instructor}</div>
                </div>
            </div>
            <div className="price-and-remove-container">
                <div className="course-price">
                    <span id="price-text">Price:$ {price}</span>
                </div>
                <div className="course-remove">
                    <button onClick={() => props.removeItem(props.singleItem)}>
                        <BsTrash />
                        <span id="remove-btn-text">
                            Remove
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCartItem;
