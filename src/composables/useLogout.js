import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const logout = async function() {
  error.value = null
  isPending.value = true
  try {
    await projectAuth.signOut()
    isPending.value = false
  } catch (err) {
    error.value = err.message
    console.log(err.message)
    isPending.value = false
  }
}

const useLogout = function() {
  return { error, isPending, logout }
}

export default useLogout
