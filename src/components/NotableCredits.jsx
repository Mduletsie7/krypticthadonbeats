// NotableCredits.js
import React from 'react';
import '../styles/NotableCredits.css';
import MusicPlayer from './MusicPlayer';

const NotableCredits = () => {
    const credits = [
      { id: 1, title: 'Forever Blessed', artist: 'Kryptic Tha Don (ft. Neeks BTP)', artwork: 'ForeverBlessed.jpg', audio: 'Neeks_ForeverBlessed.mp3' },
      { id: 2, title: 'Beautiful Struggle', artist: 'Bugzy Niaire', artwork: 'PavementPoems.jpg', audio: 'BugzyNiaire_BeautifulStruggle.mp3' },
      { id: 3, title: 'Born Kings', artist: 'Greenland Cak', artwork: 'TheyCallMeCaddy.jpg', audio: 'GreenlandCak_BORN-KINGS.mp3' },
      { id: 4, title: 'Broken House', artist: 'Bugzy Niaire', artwork: 'BrokenHouse.jpg', audio: 'BugzyNiaire_BrokenHouse.mp3' },
      { id: 5, title: 'Bros 4 Life', artist: 'Greenland Label', artwork: 'Bros4Life.jpg', audio: 'BugzyNiaire_BrokenHouse.mp3' },
      // Add more credits as needed
    ];
  
    return (
        <div className="notable-credits">
          <div className="album-list">
            {credits.map((credit) => (
              <div key={credit.id} className="album-item">
                <img src={require(`../assets/${credit.artwork}`)} alt={`Album artwork for ${credit.title}`} />
                <MusicPlayer audioSource={require(`../assets/music/${credit.audio}`)} />
                <div className="album-info">
                  <strong>{credit.title}</strong> by {credit.artist}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default NotableCredits;