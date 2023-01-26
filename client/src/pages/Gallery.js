import { useState, useEffect, useContext } from 'react';
import GalleryCard from '../components/GalleryCard';
import "./galleryStyles.css"

import Select from 'react-select';

const Gallery = () => {

    const [chordSet, setChordSet] = useState([]);
    const [currentKey, setCurrentKey] = useState('C');

    const options = [
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'G', label: 'G' },
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
    ]

    useEffect(() => {
        // query for chords in the key of C major (default)
        
        getChords(currentKey);
        // update 'chordSet' state
    }, [currentKey]);
    
    const getChords = async (keySelect) => {
        // setCurrentKey(keySelect)
        console.log(`Searching chords for key of ${keySelect}`)
        let response = await fetch(`/api/chords/key/${keySelect}`);
        let data = await response.json();
        setChordSet(data)
    }

    return (
        <div className="gallery-container">
            <section className="chord-key">
                <div className="key-container">
                    <div className="key-content">
                        <h2>Chords in the Key of:</h2>
                    </div>
                    <h1 id="key-name">{currentKey}</h1>
                    <div className="select-container">
                        <Select 
                            defaultValue={options[0]}
                            options={options}
                            onChange={(choice) => setCurrentKey(choice.value)} 
                            // onChange={(choice) => getChords(choice.value)} 
                        />
                    </div>
                </div>
            </section>

            <main>
                <div className="layout-container">
                    <div className="title">
                        <h1>GALLERY TITLE</h1>
                    </div>
                    {chordSet && 
                    <div className="item-container">
                        {chordSet.map((data) => (
                            <GalleryCard chord={data}/>
                        ))} 
                    </div>
                    }
                </div>
            </main>
        </div>
    )
}


export default Gallery;