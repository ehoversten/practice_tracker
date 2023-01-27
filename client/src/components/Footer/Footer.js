
import './footer.css';

const Footer = () => {

    return (
        <footer>
            <div class="footer-wrapper">
                <div class="links">
                    <ul>
                        <li><a href="#">Music Theory</a></li>
                        <li><a href="#">Circle of Fifths</a></li>
                        <li><a href="#">Progression Builder</a></li>
                        <li><a href="#">Chord Gallery</a></li>
                        <li><a href="#">Chords in Key</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Major Chords</a></li>
                        <li><a href="#">Minor Chords</a></li>
                        <li><a href="#">Augmented Chords</a></li>
                        <li><a href="#">Diminished Chords</a></li>
                        <li><a href="#">Suspended Chords</a></li>
                        <li><a href="#">Add(6,9,11,13) Chords</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Learn More</a></li>
                        <li><a href="#">Contribute</a></li>
                        <li><a href="#">Suggestions</a></li>
                    </ul>
                </div>
                <div class="contact">
                    {/* <h3>Join our mailing list!</h3>
                    <form action="#">
                        <input type="text" placeholder="Enter Email" />
                        <button type="submit">Join</button>
                    </form> */}
                </div>

            </div>
        </footer>
    )
}



export default Footer;