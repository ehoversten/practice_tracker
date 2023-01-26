import "../pages/galleryStyles.css";

const GalleryCard = () => {

    return (
        <>
            <div className="item">
                <div className="card">
                    <div className="img-container">
                        <img src="./assets/img/c7.png" alt="chord diagram" />
                    </div>
                    <div className="card-content">
                        <h3>ITEM TEXT</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default GalleryCard;