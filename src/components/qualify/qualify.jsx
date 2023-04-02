import './qualify.scss'
import star from '../../assets/icons/star_selected.svg'

export const Qualify = () => {
    return (
        <div className="container_qualify">
            <div className="rating">
                <input type="radio" id="star5" name="rating" value="5"/>
                <label htmlFor="star5" title="5 stars"><img src={star} alt="5 stars"/></label>
                <input type="radio" id="star4" name="rating" value="4"/>
                <label htmlFor="star4" title="4 stars"><img src={star} alt="4 stars"/></label>
                <input type="radio" id="star3" name="rating" value="3"/>
                <label htmlFor="star3" title="3 stars"><img src={star} alt="3 stars"/></label>
                <input type="radio" id="star2" name="rating" value="2"/>
                <label htmlFor="star2" title="2 stars"><img src={star} alt="2 stars"/></label>
                <input type="radio" id="star1" name="rating" value="1"/>
                <label htmlFor="star1" title="1 stars"><img src={star} alt="1 stars"/></label>
            </div>
        </div>
    )
}