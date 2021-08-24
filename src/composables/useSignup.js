import { ref } from '@vue/reactivity'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    )
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    error.value = null
    isPending.value = false
    return res
  } catch (err) {
    error.value = err.message
    console.log(err.message)
    isPending.value = false
  }
}

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup
