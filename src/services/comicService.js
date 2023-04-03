import {getComic} from "../redux/comicSlice";

export class comicServices {
    
    getRandomComic(dispatch, num) {

        if (!num)
            num = Math.floor(Math.random() * 2757);


        fetch(`https://cors-anywhere.herokuapp.com/xkcd.com/${num}/info.0.json`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                    dispatch(getComic(data))
                    return "ok"
                }
            )
            .catch((error) => console.log(error));

        return "no"

    }
  
}