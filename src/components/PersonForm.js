const PersonForm = ({onSubmit, newPerson, onChange}) => {
return (
        <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id='name'
            type="text" 
            value={newPerson.name} 
            onChange={onChange} />
        </div>
        <div>
          <label htmlFor="number">Number: </label>
          <input 
            id='number'
            type="text" 
            value={newPerson.number} 
            onChange={onChange} />
        </div>
        <div>
          <button
           type="submit"
           >add</button>
        </div>
      </form>
)
}

export default PersonForm