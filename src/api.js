const HOSTNAME = process.env.REACT_APP_HOSTNAME
const STAGE = process.env.REACT_APP_STAGE

const INSTRUMENTS_URL = `https://${HOSTNAME}/${STAGE}/instruments/`
const ARTISTS_URL = `https://${HOSTNAME}/${STAGE}/artists/`

const getInstruments = async () => {
  return fetch(INSTRUMENTS_URL)
    .catch(e => {
      console.error("error fetching instruments", e)
    })
}

const getInstrument = async (id) => {
  return fetch(INSTRUMENTS_URL + id)
    .catch(e => {
      console.error("error fetching instrument", e)
    })
}

const createInstrument = async (newInstrument) => {
  return fetch(INSTRUMENTS_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(newInstrument)
  })
}

const deleteInstrument = async (id) => {
  return fetch(INSTRUMENTS_URL + id, {
    method: "DELETE"
  })
}

const getArtists = async () => {
  return fetch(ARTISTS_URL)
    .catch(e => {
      console.error("error fetching artists", e)
    })
}

const createArtist = async (newArtist) => {
  return fetch(ARTISTS_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(newArtist)
  })
}

const deleteArtist = async (id) => {
  return fetch(ARTISTS_URL + id, {
    method: "DELETE"
  })
}

const api = {
  getInstruments,
  getInstrument,
  createInstrument,
  deleteInstrument,
  getArtists,
  createArtist,
  deleteArtist,
}

export default api
