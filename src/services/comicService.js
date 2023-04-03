import {getComic} from "./redux/comicSlice";

export class comicServices {
    
    getRandomComic(dispatch, num) {

        if (!num)
            num = Math.floor(Math.random() * 2757);


        fetch(`${num}/info.0.json`, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            mode: 'cors'
        })
            .then((response) => response.json())
            .then((data) => dispatch(getComic(data)))
            .catch((error) => console.log(error));

    }
  
}