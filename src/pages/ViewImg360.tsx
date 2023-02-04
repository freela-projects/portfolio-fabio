import { useParams } from "react-router-dom"


function ViewImg360() {
    const {imageUrl} = useParams();
    console.log(imageUrl)
  return (
        <h1>Sou o view</h1>
   
  )
}

export default ViewImg360