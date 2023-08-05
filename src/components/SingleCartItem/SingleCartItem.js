// import { Col } from "react-bootstrap";
import "./SingleCartItem.css";
const SingleCartItem = (props) => {
    const { title, instructor, price, course_thumbnail } = props.singleItem;
    console.log(props)
    return (
        <>
            <div className="single-cart-item-container">
                <div className="image-and-title-container">
                    <div className="course-image">
                        <img src={course_thumbnail} alt={title} />
                    </div>
                    <div className="course-title-instructor">
                        <div className="title">{title}</div>
                        <div className="instructor">{instructor}</div>
                    </div>
                </div>
                <div className="price-and-remove-container">
                    <div className="course-price"><span>Price: {price}</span></div>
                    <div className="course-remove">
                        <button onClick={() => props.removeItem(props.singleItem)}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCartItem