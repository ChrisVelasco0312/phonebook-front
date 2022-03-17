/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const API_URL = `http://localhost:3001/api/persons`

const getAll = () => {
  const request = axios.get(API_URL)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(API_URL, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${API_URL}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePerson = id => {
  const request = axios.delete(`${API_URL}/${id}`)
  return request.then(response => response)
}

export default {getAll, create, deletePerson, update}