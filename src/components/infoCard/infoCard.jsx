import './infoCard.scss'

export const InfoCard = (comic) => {

    let currentComic = comic.comic

    return (
        <div className="container_info_card">
            <div className="container_header">
                <div className="icon">i</div>
                <div>Info Card</div>
            </div>
            <div className="container_info">
                <table>
                    <tbody>
                        <tr>
                            <th>#:</th>
                            <td>{currentComic.num}</td>
                        </tr>
                        <tr>
                            <th>Title:</th>
                            <td>{currentComic.title}</td>
                        </tr>
                        <tr>
                            <th>Create date:</th>
                            <td>{`${currentComic.day}/${currentComic.month}/${currentComic.year}`}</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>Transcription:</th>
                        </tr>
                        <tr>
                            <td colSpan={2}>{currentComic.transcript ? currentComic.transcript : "No transcript available"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}