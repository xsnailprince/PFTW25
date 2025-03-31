
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }
  return (
    <div>
      <h1>Alpaca Fan Club</h1>
      <form onSubmit={handleSubmit(getFormData)}>
        <fieldset>
            <legend>Personal Data</legend>
            <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' {...register('firstName')} />       
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input {...register('lastName')} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input {...register('address')} />
          </div>
          <div className='form-group'>
            <label htmlFor=''>State</label>
            <select id='state' {...register('state')}>
            <option value='ID'>Idaho</option>
            <option value='CO'>Colorado</option>
            <option value='MN'>Minnesota</option>
            <option value='CA'>California</option>
            <option value='other'>Other</option>
          </select>
          </div>
          <div className="form-group">
            <label>Country</label>
            <input {...register('country')} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Alpaca Preferences</legend>
          <div className="form-group">
            <p>Favorite Alpaca color</p>
            <label>Red<input type='radio' value='red' {...register('favColor')}/></label>
            <label>Brown<input type='radio' value='brown' {...register('favColor')}/></label>
            <label>White<input type='radio' value='white' {...register('favColor')}/></label>
            <label>Black<input type='radio' value='black' {...register('favColor')}/></label>
            <label>Grey<input type='radio' value='grey' {...register('favColor')}/></label>
          </div>
          <div className="form-group">
            <label htmlFor=''>What do you like about Alpacas?</label>
            <textarea rows='8' cols='50' {...register('alpacaEssay')}></textarea>
          </div>
        </fieldset>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
