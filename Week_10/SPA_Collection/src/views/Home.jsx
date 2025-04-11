import { useState } from 'react';
import { nanoid } from 'nanoid';
import Masthead from '../Masthead/Masthead';
import ItemCard from '../ItemCard/ItemCard';
import deckData from '../assets/deck-data.json'
export function Home() {
    const [perfume, setPerfume] = useState(deckData);
    
    function deleteCard(id) {
      console.log("delete me", id);
      const updatedArray = perfume.filter((perfumeScent) => {
        return perfumeScent.id !== id; //will skip item with matching id
      })
    
      setPerfume(updatedArray);
    
    }
    
    function duplicateCard (id) {
      console.log("duplicate me", id)
      const matchingCard = perfume.find((perfumeScent) => {
        return perfumeScent.id === id
      });
      const updatedArray = {...matchingCard, id: nanoid()}
      setPerfume([...perfume, updatedArray]);
    }
    return(
        
            <div className="page">
              {/*Masthead goes here*/}
              <Masthead/>
              <div className="collection">
                {/*perfume map goes here*/}
                {/*ItemCard component in Loop*/}
                {perfume.map((perfumeScent) => { 
                  return (
                    <ItemCard key={perfumeScent.id}
                    deleteFn={deleteCard}
                    duplicateFn={duplicateCard}
                     {...perfumeScent}/>
                  )
        
                })}
               </div>
            </div>
    );
}