import axios from 'axios'

export const emails = newEmail => {
  return axios
    .post('https://fitfort.herokuapp.com/emailsignup', {
      email: newEmail.email
    })
    .then(response => {
      console.log('Registered')
      return response.data
    })
}