// -- Developing Data Sets -- //

const chordsInKey = [
    {
        key: "c_major",
        type: "major",
        title: "C major",
        notes: ["C", "D", "E", "F", "G", "A", "B"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim"],
        chordsInKey_short: ["C", "Dm", "Em", "F", "G", "Am", "B°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "a_minor"
    },
    {
        key: "a_minor",
        type: "natural minor",
        title: "A minor",
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Amin", "Bdim", "Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj"],
        chordsInKey_short: ["Am", "B°", "C", "Dm", "Em", "F", "G"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "c_major"
    },
    // -- //
    {
        key: "g_major",
        type: "major",
        title: "G major",
        notes: ["G", "A", "B", "C", "D", "E", "F#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj", "Emin", "F#dim"],
        chordsInKey_short: ["G", "Am", "Bm", "C", "D", "Em", "F#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "e_minor"
    },
    {
        key: "e_minor",
        type: "natural minor",
        title: "E minor",
        notes: ["A", "B", "C", "D", "E", "F", "G"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Emin", "F#dim", "Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj"],
        chordsInKey_short: ["Em", "F#°", "G", "Am", "Bm", "C", "D"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "g_major"
    },
    // -- //
    {
        key: "d_major",
        type: "major",
        title: "D major",
        notes: ["D", "E", "F#", "G", "A", "B", "C#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Dmaj", "Emin", "F#min", "Gmaj", "Amaj", "Bmin", "C#dim"],
        chordsInKey_short: ["D", "Em", "F#m", "G", "A", "Bm", "C#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "b_minor"
    },
    {
        key: "b_minor",
        type: "natural minor",
        title: "E minor",
        notes: ["B", "C", "D", "E", "F#", "G#", "A"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Bmin", "Cdim", "Dmaj", "Emin", "F#min", "Gmaj", "Amaj"],
        chordsInKey_short: ["Bm", "C°", "D", "Em", "F#m", "G#", "A"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "d_major"
    },
    // -- //
    {
        key: "a_major",
        type: "major",
        title: "A major",
        notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Amaj", "Bmin", "C#min", "Dmaj", "Emaj", "F#min", "G#dim"],
        chordsInKey_short: ["A", "Bm", "C#m", "D", "E", "F#m", "G#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "f#_minor"
    },
    {
        key: "f#_minor",
        type: "natural minor",
        title: "F# minor",
        notes: ["F#", "G#", "A", "B", "C#", "D", "E"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["F#min", "G#dim", "Amaj", "Bmin", "C#min", "Dmaj", "Emaj"],
        chordsInKey_short: ["F#m", "G#°", "A", "Bm", "C#m", "D", "E"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "a_major"
    },
    // -- //
    {
        key: "e_major",
        type: "major",
        title: "E major",
        notes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Emaj", "F#min", "G#min", "Amaj", "Bmaj", "C#min", "D#dim"],
        chordsInKey_short: ["E", "F#m", "G#m", "A", "B", "C#m", "D#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "c#_minor"
    },
    {
        key: "c#_minor",
        type: "natural minor",
        title: "C# minor",
        notes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["C#min", "D#dim", "Emaj", "F#min", "G#min", "Amaj", "Bmaj"],
        chordsInKey_short: ["F#m", "G#°", "A", "Bm", "C#m", "D", "E"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "e_major"
    },
    // -- //
    {
        key: "b_major",
        type: "major",
        title: "B major",
        notes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Bmaj", "C#min", "D#min", "Emaj", "F#min", "G#min", "A#dim"],
        chordsInKey_short: ["B", "C#m", "D#m", "E", "F#m", "G#m", "A#°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "g#_minor"
    },
    {
        key: "g#_minor",
        type: "natural minor",
        title: "G# minor",
        notes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["G#min", "A#dim", "Bmaj", "C#min", "D#min", "Emaj", "F#maj"],
        chordsInKey_short: ["G#m", "A#°", "B", "C#m", "D#m", "E", "F#m"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "b_major"
    },
    // ----------- //
    {
        key: "f_major",
        type: "major",
        title: "F major",
        notes: ["F", "G", "A", "B♭", "C", "D", "E"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["Fmaj", "Gmin", "Amin", "B♭maj", "Cmaj", "Dmin", "Edim"],
        chordsInKey_short: ["F", "G", "A", "B♭", "C", "D", "E°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "d_minor"
    },
    {
        key: "d_minor",
        type: "natural minor",
        title: "D minor",
        notes: ["D", "E", "F", "G", "A", "B♭", "C"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Dmin", "Edim", "Fmaj", "Gmin", "Amin", "B♭maj", "Cmaj"],
        chordsInKey_short: ["Dm", "E°", "F", "Gm", "Am", "B♭", "C"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "f_major"
    },
    // ----------- //
    {
        key: "b_flat_major",
        type: "major",
        title: "B♭ major",
        notes: ["B♭", "C", "D", "E♭", "F", "G", "A"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["B♭maj", "Cmin", "Dmin", "E♭maj", "Fmaj", "Gmin", "Adim"],
        chordsInKey_short: ["B♭", "Cm", "Dm", "E♭", "F", "Gm", "A°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "d_minor"
    },
    {
        key: "g_minor",
        type: "natural minor",
        title: "G minor",
        notes: ["G", "A", "B♭", "C", "D", "E♭", "F"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Gmin", "Adim", "B♭maj", "Cmin", "Dmin", "E♭maj", "Fmaj"],
        chordsInKey_short: ["Gm", "A°", "B♭", "Cm", "Dm", "E♭", "F"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "b_flat_major"
    },
    // ----------- //
    {
        key: "e_flat_major",
        type: "major",
        title: "E♭ major",
        notes: ["E♭", "F", "G", "A♭", "B♭", "C", "D"],
        chordType: ["maj", "min", "min", "maj", "maj", "min", "dim"],
        chordsInKey: ["E♭maj", "Fmin", "Gmin", "A♭maj", "B♭maj", "Cmin", "Ddim"],
        chordsInKey_short: ["E♭", "Fm", "Gm", "A♭", "B♭", "Cm", "D°"],
        romanValue: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
        relative_key: "c_minor"
    },
    {
        key: "c_minor",
        type: "natural minor",
        title: "C minor",
        notes: ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
        chordType: ["min", "dim", "maj", "min", "min", "maj", "maj"],
        chordsInKey: ["Cmin", "Ddim", "E♭maj", "Fmin", "Gmin", "A♭maj", "B♭maj"],
        chordsInKey_short: ["Cm", "D°", "E♭", "Fm", "Gm", "A♭", "B♭"],
        romanValue: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
        relative_key: "e_flat_major"
    },
]


// ------ Chord Objects ------ /

const c_major = {
    root: "C",
    third: "E",
    fifth: "G"
}
const d_minor = {
    root: "D",
    third: "F",
    fifth: "A"
}
const e_minor = {
    root: "E",
    third: "G",
    fifth: "B"
}
const f_major = {
    root: "F",
    third: "A",
    fifth: "C"
}
const g_major = {
    root: "G",
    third: "B",
    fifth: "D"
}
const a_minor = {
    root: "A",
    third: "C",
    fifth: "E"
}
const b_diminished = {
    root: "B",
    third: "D",
    fifth: "F"
}

const c_scale = [c_major, d_minor, e_minor, f_major, g_major, a_minor, b_diminished]

module.exports = { chordsInKey, c_scale }