import './search.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {comicServices} from "../../services/comicService";

export const Search = () => {

    const dispatch = useDispatch();
    const service = new comicServices()

    const [num, setNum] = useState(0)

    function searchComic() {
        if (num !== 0) {
            service.getRandomComic(dispatch, num)
        }
    }

    function onChange(event) {
        setNum(event.target.value)
    }

    return (
        <div className="container_search_card">
            <div className="container_search">
                <h3>Search Comic</h3>
                <input type="number" placeholder="Enter a number" onChange={onChange}/>
                <button onClick={searchComic}>Search</button>
            </div>
        </div>
    )
}