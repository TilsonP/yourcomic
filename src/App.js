import {Home} from "./screens/home";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {comicServices} from "./services/comicService";
import { PacmanLoader } from 'react-spinners'

function App() {

    const dispatch = useDispatch();
    const service = new comicServices()

    const [loading, setLoading] = useState(true)
    const [comicLoaded, setComicLoaded] = useState(false)
    function loadComic() {
        let load = service.getRandomComic(dispatch)
        load === "ok" && setComicLoaded(true)
    }

    useEffect(() => {
        setLoading(true)
        loadComic()
        comicLoaded && setTimeout(() => setLoading(false),2000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
