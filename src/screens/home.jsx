import {useSelector} from "react-redux";
import {InfoCard} from "../components/infoCard/infoCard";
import {ImageCard} from "../components/imageCard/imageCard";
import './home.scss'
import {Qualify} from "../components/qualify/qualify";
import {Search} from "../components/search/search";

export const Home = () => {

    const comic = useSelector((state) => state.comic)

    return (
        <div className="container_home">
            <div>
                <InfoCard comic={comic}/>
                <Qualify/>
                <Search/>
            </div>
            <div className="image">
                <ImageCard comic={comic}/>
            </div>
        </div>
    )
}