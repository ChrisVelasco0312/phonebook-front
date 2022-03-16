import axios from 'axios'

import personService from './services/personService'

import { useState, useEffect } from 'react'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])

  
  const [filterList, setFilterList] = useState([...persons])

  const initialPerson = {
    name: '',
    number: ''
  }
  const [newPerson, setNewPerson] = useState(initialPerson)
  
  const addPerson = (event) => {
    event.preventDefault()

    const nameExist = persons.some(person => person.name === newPerson.name)
   
    if(nameExist) {
      const confirm = window.confirm(
        `${newPerson.name} is already added to phonebook, replace the old number with new one`
      )
      
      if (confirm) {
        const personToUpdate = persons.find(person => person.name === newPerson.name)
        personService
          .update(personToUpdate.id, {...newPerson, number: newPerson.number})
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson ))
            setFilterList(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson ))
            setNewPerson(initialPerson)
          })
      }
      return 
    }
    const personObject = {
      id: persons.length + 1,
      name: newPerson.name,
      number: newPerson.number
    }

    personService
     .create(personObject)
     .then(createdObject => {
       setPersons(persons.concat(createdObject))
       setFilterList(persons.concat(createdObject))
       setNewPerson(initialPerson)
      })
    
    }

    const onChangeForm = (event) => {
      const input = event.target.id
      setNewPerson({...newPerson, [input]:event.target.value })
    }
    
    const onPersonDelete = (event) => {
      const personId = Number(event.target.id)
      const personToDelete = persons.find(person => person.id === personId)
      
      if (!personToDelete) return 
      
      const confirm = window.confirm(`Delete ${personToDelete.name} ?`) 
      if (confirm) {
        personService
        .deletePerson(personToDelete.id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== personToDelete.id))
          setFilterList(persons.filter(person => person.id !== personToDelete.id))
        })
      }
      // personService.deletePerson(event.target.id)
    }
    
    useEffect(() => {
      personService
        .getAll()
        .then(personData => {
          setPersons(personData)
          setFilterList(personData)
        })
    }, [])
    
    return (
      <div>
      <h2>Phonebook</h2>

      <Filter filterList={filterList} setFilterList={setFilterList} persons={persons} />

      <h2>Add new</h2>
      
      <PersonForm onSubmit={addPerson} onChange={onChangeForm} newPerson={newPerson} />

      <h2>Numbers</h2>
      <Persons personList={filterList} deleteAction={onPersonDelete}/>
    </div>
  )
}

export default App
