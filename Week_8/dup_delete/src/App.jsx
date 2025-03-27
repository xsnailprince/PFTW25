import { useState } from 'react'
import './App.css'
import Masthead from './Masthead/Masthead';
import ItemCard from './ItemCard/ItemCard';
import { nanoid } from 'nanoid';

function App() {
  const [perfume, setPerfume] = useState(
 [
  {
    name: "Black Opium over Red",
    notes: ["Cherry", "Jasmine", "OrangeBlossom", "BlackTea", "Vanilla", "Coffee", "PatchouliLeaf"],
    brand: "Yves Saint Laurent",
    desc: "Black Opium Eau de Parfum Over Red—the iconic sensual coffee floral accord from Yves Saint Laurent turns red with a hypnotic and radiant ingredient, a juicy cherry accord. This sought-after sweet perfume scent takes the signature of Black Opium into a new fruity universe. Black Opium Eau de Parfum Over Red is the dreamiest warm and sweet cherry perfume that truly captures the senses and lasts all night long.",
    price: "$165",
    have: true,
    image: "./Perfume_1.jpg",
    id: "1"
  },

    {name: "Lost Cherry",
    notes: ["Cherry", "BitterAlmond", "Rose", "Balsam", "Vanilla"],
    brand: "Tom Ford",
    desc: "Lost Cherry mingles black cherry with cherry liqueur accords and a touch of bitter almond, bursting forth in waves of sweet and tart. Opulent floral notes of rose and jasmine sambac blend with an unexpected mélange of sandalwood, vetiver, and cedarwood.",
    price: "$255",
    have: false,
    image: "./Perfume_2.jpg",
    id: "2"
  },

    {name: "Lust",
    notes: ["Jasmine", "YlangYlang", "Rose", "Sandalwood"],
    brand: "Lush Cosmetics",
    desc: "It’s virtually unheard of for a perfume to be this sexy. Lust is a heady mash-up of rich florals and a warm, woody base that lasts on the skin for hours and hours. It's a multi-layered fragrance made up of jasmine, ylang ylang, rose, vanilla and sandalwood making it (and you, by association) unabashedly sexy. Resistance is futile.",
    price: "$130",
    have: true,
    image: "./Perfume_3.jpg",
    id: "3"
  },

    {name: "Gorgon",
    notes: ["Violets", "Plum", "Fig", "Musk"],
    brand: "Andromeda's Curse",
    desc: "Women with long tresses of living, venomous snakes. A mere side-glance from behind long eyelashes was powerful enough to turn those who beheld her to stone. Powdered violets, sweet plums, figs, and a dusting of feminine musk.",
    price: "$43",
    have: true,
    image: "./Perfume_5.jpg",
    id: "4"
  },

    {name: "Neptune",
    notes: ["SeaMoss", "SaltWater", "Amber", "Sandalwood", "Musk"],
    brand: "Andromeda's Curse",
    desc: "Neptume is named for the Roman God of the Sea- this fragrance is an ode to the sea with salty sea water and sea moss.",
    price: "$43",
    have: true,
    image: "./Perfume_4.jpg",
    id: "5"
  }
]);

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

  return (
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
  )
}

export default App
