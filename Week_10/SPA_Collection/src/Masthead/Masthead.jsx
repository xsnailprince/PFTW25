import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";
export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Jamie's Favorite Perfumes"/>
            <h1>Jamie&apos;s Favorite Perfumes</h1>
        </div>
    )
}