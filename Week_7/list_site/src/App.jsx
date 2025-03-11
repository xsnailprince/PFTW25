import "./App.css"
function App() {
  const favPerfumes = [
    {perfume: "Black Opium over Red",
    notes: ["Cherry", "Jasmine", "Orange Blossom", "Black Tea", "Vanilla", "Coffee", "Patchouli Leaf"],
    brand: "Yves Saint Laurent",
    desc: "Black Opium Eau de Parfum Over Red—the iconic sensual coffee floral accord from Yves Saint Laurent turns red with a hypnotic and radiant ingredient, a juicy cherry accord. This sought-after sweet perfume scent takes the signature of Black Opium into a new fruity universe. Black Opium Eau de Parfum Over Red is the dreamiest warm and sweet cherry perfume that truly captures the senses and lasts all night long.",
    price: "$165",
    image: "/Perfume_1.jpg"
    },

    {perfume: "Lost Cherry",
    notes: ["Cherry", "Bitter Almond", "Rose", "Balsam", "Vanilla"],
    brand: "Tom Ford",
    desc: "Lost Cherry mingles black cherry with cherry liqueur accords and a touch of bitter almond, bursting forth in waves of sweet and tart. Opulent floral notes of rose and jasmine sambac blend with an unexpected mélange of sandalwood, vetiver, and cedarwood.",
    price: "$255",
    image: "/Perfume_2.jpg"
    },

    {perfume: "Lust",
    notes: ["Jasmine", "Ylang Ylang", "Rose", "Sandalwood"],
    brand: "Lush Cosmetics",
    desc: "It’s virtually unheard of for a perfume to be this sexy. Lust is a heady mash-up of rich florals and a warm, woody base that lasts on the skin for hours and hours. It's a multi-layered fragrance made up of jasmine, ylang ylang, rose, vanilla and sandalwood making it (and you, by association) unabashedly sexy. Resistance is futile.",
    price: "$130",
    image: "/Perfume_3.jpg"
    },

    {perfume: "Gorgon",
    notes: ["Violets", "Plum", "Fig", "Musk"],
    brand: "Andromeda's Curse",
    desc: "Women with long tresses of living, venomous snakes. A mere side-glance from behind long eyelashes was powerful enough to turn those who beheld her to stone. Powdered violets, sweet plums, figs, and a dusting of feminine musk.",
    price: "$43",
    image: "/Perfume_4.jpg"
    },

    {perfume: "Neptune",
    notes: ["Sea Moss", "Salt Water", "Amber", "Sandalwood", "Musk"],
    brand: "Andromeda's Curse",
    desc: "Neptume is named for the Roman God of the Sea- this fragrance is an ode to the sea with salty sea water and sea moss.",
    price: "$43",
    image: "/Perfume_5.jpg"
    }
  ];
  return (
    <>
    <h1>My Top 5 Favorite Perfumes</h1>
    <p>I love smelling smells, here are my favorites.</p>
    <table className="perfume-table">
      <thead>
        <tr>
          <th>Perfume Name</th>
          <th>Brand</th>
          <th>Fragrance Notes</th>
          <th>Price per 30 mL</th>
          <th>Image</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{favPerfumes[0].perfume}</td>
          <td>{favPerfumes[0].brand}</td>
          <td>{favPerfumes[0].notes.join(", ")}</td>
          <td>{favPerfumes[0].price}</td>
          <td><img src={favPerfumes[0].image} alt={favPerfumes[0].perfume}></img></td>
          <td>{favPerfumes[0].desc}</td>
        </tr>
        <tr>
          <td>{favPerfumes[1].perfume}</td>
          <td>{favPerfumes[1].brand}</td>
          <td>{favPerfumes[1].notes.join(", ")}</td>
          <td>{favPerfumes[1].price}</td>
          <td><img src={favPerfumes[1].image} alt={favPerfumes[1].perfume}></img></td>
          <td>{favPerfumes[1].desc}</td>
        </tr>
        <tr>
          <td>{favPerfumes[2].perfume}</td>
          <td>{favPerfumes[2].brand}</td>
          <td>{favPerfumes[2].notes.join(", ")}</td>
          <td>{favPerfumes[2].price}</td>
          <td><img src={favPerfumes[2].image} alt={favPerfumes[2].perfume}></img></td>
          <td>{favPerfumes[2].desc}</td>
        </tr>
        <tr>
          <td>{favPerfumes[3].perfume}</td>
          <td>{favPerfumes[3].brand}</td>
          <td>{favPerfumes[3].notes.join(", ")}</td>
          <td>{favPerfumes[3].price}</td>
          <td><img src={favPerfumes[3].image} alt={favPerfumes[3].perfume}></img></td>
          <td>{favPerfumes[3].desc}</td>
        </tr>
        <tr>
          <td>{favPerfumes[4].perfume}</td>
          <td>{favPerfumes[4].brand}</td>
          <td>{favPerfumes[4].notes.join(", ")}</td>
          <td>{favPerfumes[4].price}</td>
          <td><img src={favPerfumes[4].image} alt={favPerfumes[4].perfume}></img></td>
          <td>{favPerfumes[4].desc}</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}

export default App;