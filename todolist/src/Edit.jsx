import { useParams} from "react-router-dom"


function Edit(){
    const {id}= useParams()
    return(
    <>
        <div>Hello{id}</div>
    </>
)
}
export default Edit