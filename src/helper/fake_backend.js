
import axios from "axios"

export const Login_User = (url, payload) => {
    console.log(url)
    axios.post(url, payload)
      .then(resp => {
          if(resp.data.status!==204){
              return resp.data
          }
          console.log()
      }).catch(err => {
            console.log(err)
      })

}

export const Signup_User = (url, payload) => {
    return axios.post(url, payload)
    .then(resp => {
        if(resp.data.status!==204){
            console.log(resp)
            return resp
        }
        console.log() 
    }).catch(err => {
          console.log(err)
    })
}