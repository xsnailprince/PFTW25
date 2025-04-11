import clsx from "clsx";
import PropTypes from "prop-types";
import { useParams, Link } from 'react-router-dom';
import './Detail.css'
export function DeckDetail({data}) {
    const { id } = useParams();
    console.log('params', id);
    const selectedPerfume = data.find((perfume) => perfume.id === id);
    console.log('perfume', selectedPerfume);
    return (
        <>
        <div>
            <Link to='/'>Return to Perfume List</Link>
                <div className='detailPage'>
                    <h1>{selectedPerfume.name}</h1>
                    <h2>{selectedPerfume.brand}</h2>
                    <h3>{selectedPerfume.price}</h3>
                    <img src={selectedPerfume.image} alt={selectedPerfume.name}/>

                    <p> {selectedPerfume.desc}</p>
                    {selectedPerfume.notes.map((notes) => {
                        return (<div key={notes} className={clsx(["stripe", notes])}></div>)
                    })}
                </div>
            </div>
        </>
    )
}

DeckDetail.propTypes = {
    data: PropTypes.array
 };