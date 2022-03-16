import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '8999001023', id:1 }
  ])
  
  const [filterList, setFilterList] = useState([...persons])

  const initialPerson = {
    name: '',
    phone: ''
  }
  const [newPerson, setNewPerson] = useState(initialPerson)

  const addPerson = (event) => {
    event.preventDefault()

    const nameExist = persons.some(person => person.name === newPerson.name)
   
    if(nameExist) return alert(`${newPerson.name} is already added to phonebook`)
    const personObject = {
      id: persons.length + 1,
      name: newPerson.name,
      phone: newPerson.phone
    }

    setPersons(persons.concat(personObject))
    setFilterList(persons.concat(personObject))
    
    setNewPerson(initialPerson)
    
  }

  const onChangeForm = (event) => {
    const input = event.target.id
    setNewPerson({...newPerson, [input]:event.target.value })
  }

  const filterNameHandler = (event) => {
    const value = (event.target.value).toLowerCase()
    
    if(!value) return setFilterList([...persons])

    const findedPersons = persons.filter(person => (person.name.toLowerCase()).includes(value))
    setFilterList([...findedPersons])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label htmlFor="filterName">Filter by name:</label>
        <input id="filterName" type="text" onChange={filterNameHandler}/>
      </div>

      <h2>Add new</h2>
      <form onSubmit={addPerson}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
            id='name'
            type="text" 
            value={newPerson.name} 
            onChange={onChangeForm} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input 
            id='phone'
            type="text" 
            value={newPerson.phone} 
            onChange={onChangeForm} />
        </div>
        <div>
          <button
           type="submit"
           >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterList.map(person => (
        <div key={person.id}>
          <p>
            Name: {person.name}
          </p>
          <p>
            Phone: {person.phone}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
