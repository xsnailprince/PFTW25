import "./colors.css";
function Color ({name, desc, imgsrc}) {
    console.log(name)
    return (
        <div className="colorCard">
            <h1>{name}</h1>
            <img src= {imgsrc}/>
            <p>{desc}</p>
            
        </div>
    );
}

export default Color;