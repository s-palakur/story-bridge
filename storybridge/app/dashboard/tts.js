import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import styles from "./Dash.module.css";

const TextToSpeechButton = () => {
  const handleReadText = () => {
    // const textToRead = document.querySelector(‘.styles.logoContainer’).innerText;
    const textToRead = document.querySelector("#readable").textContent;
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToRead);
      // get voice options
      const voices = window.speechSynthesis.getVoices();
      // console.log(voices)
      const desiredVoice = voices.find(voice => voice.name === "Grandpa (English (United Kingdom))");
      // Set the desired voice for the utterance
      utterance.voice = desiredVoice;
      speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in your browser. Please try a different browser.');
    }
  };
  return (
    <button className={styles.buttontts} onClick={handleReadText}>
    <FontAwesomeIcon icon={faVolumeUp} />
    </button>
  );
};

export default TextToSpeechButton;