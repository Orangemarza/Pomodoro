import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import Playbutton from './PlayButton';
import SettingsButton from './SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer () {
    return (
        <div>
            <CircularProgressbar 
            value={50} 
            text={`${50}%`} 
            styles={buildStyles({
            textColor: '#fff',
            pathColor: 'red',
            trailColor: 'rgba(255,255,255,.2)',
          })} /> 
          <div style={{marginTOP:'20px'}}>
            <Playbutton />
            <PauseButton />
          </div>
          <div style={{marginTop:'20px'}}>
            <SettingsButton />
          </div>
        </div>
     );
}

export default Timer;
