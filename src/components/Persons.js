const Persons = ({personList, deleteAction}) => {
  return (
    <div className="phonebook-list">
     {personList.map(person => (
        <div className="person-card" key={person.id}>
          <p>
            <strong>Name:</strong> {person.name}
          </p>
          <p>
            <strong>Phone: </strong> {person.number}
          </p>
          <div>
            <button className="button color-danger" id={person.id} onClick={deleteAction}>delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Persons