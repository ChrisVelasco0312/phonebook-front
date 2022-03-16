const Filter = ({setFilterList, persons}) => {

  const filterNameHandler = (event) => {
    const value = (event.target.value).toLowerCase()
    
    if(!value) return setFilterList([...persons])

    const findedPersons = persons.filter(person => (person.name.toLowerCase()).includes(value))
    setFilterList([...findedPersons])
  }

  return (
      <div>
        <label htmlFor="filterName">Filter by name:</label>
        <input id="filterName" type="text" onChange={filterNameHandler}/>
      </div>
  )
}

export default Filter