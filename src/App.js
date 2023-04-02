import {Home} from "./screens/home";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {comicServices} from "./services/comicService";

function App() {

    const dispatch = useDispatch();
    const service = new comicServices()
    function loadComic() {
        service.getRandomComic(dispatch)
    }

    useEffect(() => {
        loadComic()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <Home/>
        </div>
    );
}

export default App;
