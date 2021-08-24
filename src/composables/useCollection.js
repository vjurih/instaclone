import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  // Add new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      await projectFirestore.collection(collection).add(doc)
      isPending.value = false
    } catch (err) {
      error.value = err.message
      console.log(err.message)
      isPending.value = false
    }
  }
  return { error, isPending, addDoc }
}

export default useCollection
