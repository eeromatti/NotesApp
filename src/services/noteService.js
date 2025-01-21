import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

// fetches all notes from the server
const getAll = () => {
    const response = axios.get(baseUrl)
    return response
  }

// creates a new note
const create = (newObject) => {
  return axios.post(baseUrl, newObject)
}

// updates a note
const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

// removes a note
const remove = (id) => {
  console.log("noteservicen remove-serviceä kutsutaan")
  return axios.delete(`${baseUrl}/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    getAll,
    create,
    update,
    remove
  };