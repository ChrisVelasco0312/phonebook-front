const PersonForm = ({onSubmit, newPerson, onChange}) => {
return (
        <form className="phonebook-form" onSubmit={onSubmit}>
        <div className="phonebook-field">
          <label htmlFor="name">Name: </label>
          <input
            className="input-concrete" 
            id='name'
            type="text" 
            value={newPerson.name} 
            onChange={onChange} />
        </div>
        <div className="phonebook-field">
          <label htmlFor="number">Number: </label>
          <input
            className="input-concrete" 
            id='number'
            type="text" 
            value={newPerson.number} 
            onChange={onChange} />
        </div>
        <div className="phonebook-actions">
          <button className="button color-blue"
           type="submit"
           >+ add</button>
        </div>
      </form>
)
}

export default PersonForm