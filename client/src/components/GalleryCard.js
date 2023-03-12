import "../pages/galleryStyles.css";
import testImg from '../datasets/images/Chordbook/C_major_100x100.png';
import testImg2 from '../datasets/images/Chordbook/C_major_200x200.png';
import testImgSvg from '../datasets/images/Chordbook/C_major.svg';

const GalleryCard = ({ chord, key }) => {

    return (
        <>
            <div className="item">
                <div className="card">
                    <div className="img-container">
                        {/* <img src="./assets/img/c7.png" alt="chord diagram" /> */}
                        {/* <img src={testImg} alt="" /> */}
                        <img src={testImg2} alt="" />
                        {/* <img src={chord.image[key]} alt="" /> */}
                    </div>
                    <div className="card-content">
                        <h3>{chord}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}


export default GalleryCard;