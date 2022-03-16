const Persons = ({personList, deleteAction}) => {
  return (
    <>
     {personList.map(person => (
        <div key={person.id}>
          <p>
            Name: {person.name}
          </p>
          <p>
            Phone: {person.number}
          </p>
          <div>
            <button id={person.id} onClick={deleteAction}>delete</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Persons