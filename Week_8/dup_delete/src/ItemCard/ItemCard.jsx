import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import star from "../assets/icons/owned.png";
import trash from "../assets/icons/delete.png";
import copy from "../assets/icons/duplicate.png";
export default function ItemCard({
    name,
    notes,
    brand,
    desc,
    price,
    have,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="perfumeCard">
            {have && <div className="have"> <img src={star} title="owned"/></div>}
            <div className="cardImg">
                <img src={image} alt={name} />
            </div>
            <div className="cardTitle">{name}</div>
            {notes.map((notes) => {
                return <div key={notes} className={clsx(["stripe", notes])} />
            })}
            <div className="action">
                <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        deleteFn(id)
                    }}>
                <img src={trash} /></a>
                <a href="#" onClick={(evt) => {
                        evt.preventDefault();
                        duplicateFn(id)
                    }}>
                <img src={copy} /></a>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    name: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.string),
    brand: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
    have: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}