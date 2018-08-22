import React from 'react'
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/build/styles.css';
import SoundfontProvider from './SoundfontProvider';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

const BasicPiano = (props) => {
  const textArea = props.stateOfTextArea
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={300}
          onPlayNote={playNote}
          onStopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={!textArea ? keyboardShortcuts : null}
        />
      )}
    />
  );
}

export default BasicPiano
