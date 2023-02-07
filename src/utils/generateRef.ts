import {ref} from "firebase/storage"
import storage from "../lib/firebase"

function generateRef(path: string) {
  return ref(storage, path)
}

export default generateRef