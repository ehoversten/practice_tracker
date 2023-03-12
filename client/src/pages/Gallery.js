import { useState, useEffect, useContext } from 'react';
import GalleryCard from '../components/GalleryCard';
import { motion } from 'framer-motion';
import keySignature from '../datasets/Keys';
import { chordsInKey, c_scale } from '../datasets/Chords';
import "./galleryStyles.css"

import Select from 'react-select';

const Gallery = () => {

    const [chordSet, setChordSet] = useState([]);
    const [currentKey, setCurrentKey] = useState('C');

    const options2 = [
        { value: 'C', label: 'C' },
        { value: 'C# / Db', label: 'C#/Db' },
        { value: 'D', label: 'D' },
        { value: 'D# / Eb', label: 'D#/Eb' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'F# / Gb', label: 'F#/Db' },
        { value: 'G', label: 'G' },
        { value: 'G# / Ab', label: 'G#/Ab' },
        { value: 'A', label: 'A' },
        { value: 'A# / Bb', label: 'A#/Bb' },
        { value: 'B', label: 'B' },
    ]

    const options = [
        { value: 'C', label: 'C' },
        { value: 'C#', label: 'C#' },
        { value: 'Db', label: 'Db' },
        { value: 'D', label: 'D' },
        { value: 'D#', label: 'D#' },
        { value: 'Eb', label: 'Eb' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'F#', label: 'F#' },
        { value: 'Gb', label: 'Gb' },
        { value: 'G', label: 'G' },
        { value: 'G#', label: 'G#' },
        { value: 'Ab', label: 'Ab' },
        { value: 'A', label: 'A' },
        { value: 'A#', label: 'A#' },
        { value: 'Bb', label: 'Bb' },
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

        /*  TO DO...
        let response = await fetch(`/api/chords/key/${keySelect}`);
        let data = await response.json();
        */

        // -- TEMP LOGIC -- //
        let keyToFind = [];
        chordsInKey.map(item => { 
            // console.log("Item: ", item)
            // console.log("KeyItem: ", item.key[0])
            if(item.key[0] == keySelect.toLowerCase()) {
                keyToFind.push(item);
            };
        })
        console.log("Found: ", keyToFind);
        setChordSet(keyToFind[0].chordsInKey)
    }

    return (
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.5 }}
            exit={{ x: window.innerWidth, transition:{ duration: 0.5 }, ease: 'easeInOut' }}
            className="gallery-container"
        >
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

            {/* <main> */}
                <div className="layout-container">
                    <div className="title">
                        <h1>GALLERY TITLE</h1>
                    </div>
                    {chordSet && 
                    <div className="item-container">
                        {chordSet.map((data, index) => (
                            <GalleryCard chord={data} key={index}/>
                        ))} 
                    </div>
                    }
                </div>
            {/* </main> */}
        </motion.div>
    )
}


export default Gallery;