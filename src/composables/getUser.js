import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const user = projectAuth.currentUser

const getUser = () => {
  return { user }
}

export default getUser
