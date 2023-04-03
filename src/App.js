import {Home} from "./screens/home";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {comicServices} from "./services/comicService";
import { PacmanLoader } from 'react-spinners'

function App() {

    const dispatch = useDispatch();
    const service = new comicServices()

    const comic = useSelector((state) => state.comic)

    const [loading, setLoading] = useState(true)
    function loadComic() {
        service.getRandomComic(dispatch)
    }

    useEffect(() => {
        loadComic()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        comic.img && setLoading(false)
    },[comic])

    return (
        <div className="App">
            {!loading ?
                <Home/>:
                <div className="loading">
                    <PacmanLoader color="#fff" />
                </div>
            }
        </div>
    );
}

export default App;
