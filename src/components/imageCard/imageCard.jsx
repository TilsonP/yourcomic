import './imageCard.scss'

export const ImageCard = (comic) => {

    let currentComic = comic.comic

    return (
        <div className="container_image_card">
            <div className="container_title">
                <div className="info_type">COMIC</div>
                <div className="title">{currentComic.title}</div>
            </div>
            <div className="container_image">
                <img src={currentComic.img} alt=""/>
            </div>
        </div>
    )

}