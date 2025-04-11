import { useForm } from 'react-hook-form';
export function NewPerfumeForm(props) {
    const {addPerfumeFn} = props;
    const { register, handleSubmit, formState: {errors}} = useForm();
    return(
        <form onSubmit={handleSubmit((data) => {
            console.log("form data", data);
            const newId = String(Math.round(Math.random()*10000))
            const newPerfume = {...data, id: newId}
            setPerfume([...perfume, newPerfume])
        })}>
            <fieldset>
            <legend>
                Add a deck
            </legend>
            <div className="form-group">
                <label htmlFor="perfumeName">Perfume</label>
                <input {...register("name")}/>
            </div>
            <div className="form-group">
                <p>Fragrance Notes</p>
                <label><input type="checkbox" value="Cherry" {...register("notes")} />Cherry</label>
                <label><input type="checkbox" value="BitterAlmond" {...register("notes")} />Almond</label>
                <label><input type="checkbox" value="Rose" {...register("notes")}/>Rose</label>
                <label><input type="checkbox" value="YlangYlang" {...register("notes")}/>Ylang Ylang</label>
                <label><input type="checkbox" value="Sandalwood" {...register("notes")}/>SandalWood</label>
                <label><input type="checkbox" value="Vanilla" {...register("notes")}/>Vanilla</label>
                <label><input type="checkbox" value="Plum" {...register("notes")}/>Plum</label>
                <label><input type="checkbox" value="Fig" {...register("notes")}/>Fig</label>
                <label><input type="checkbox" value="Musk" {...register("notes")} />Musk</label>
                <label><input type="checkbox" value="SeaMoss" {...register("notes")}/>Sea Moss</label>
            </div>
            <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <input {...register("brand")}/>
            </div>
            <div className="form-group">
                <label htmlFor="price">Price USD per 30mL</label>
                <input {...register("price")}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Perfume Image</label>
                <input {...register("image")}/>
            </div>
            </fieldset>
            <button type="submit">Add perfume</button>
        </form>
    )
}