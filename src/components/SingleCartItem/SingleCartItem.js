import "./SingleCartItem.css";
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';


const SingleCartItem = (props) => {
    const { course_thumbnail, title, instructor, price } = props.singleItem;
    // Function to handle item removal
    const handleRemove = () => {
        Swal.fire({
            title: 'Remove Course',
            text: `Are you sure you want to remove ${title} from your cart?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#04F06A',
            confirmButtonText: 'Yes, remove it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                props.removeFromCart(props.singleItem);
                Swal.fire('Removed!', `${title} has been removed from your cart.`, 'success');
            }
        });
    };
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
                    <button onClick={handleRemove}>
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
