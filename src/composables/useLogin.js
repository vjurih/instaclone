import { ref } from '@vue/reactivity'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async function(email, password) {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    isPending.value = false
    return res
  } catch (err) {
    error.value = 'Incorrect login credentials'
    console.log(err.message)
    isPending.value = false
  }
}

const useLogin = function() {
  return { error, isPending, login }
}

export default useLogin
