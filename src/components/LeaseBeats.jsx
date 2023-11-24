import React from 'react';
import '../styles/LeaseBeats.css'

const LeaseBeats = () => {
  const htmlContent = '<iframe src="https://player.beatstars.com/?storeId=117930" width="100%" height="800" style="max-width:1024px;"> -- none -- </iframe>';

  return (
    <div className='LeaseBeats-section'>
    <h1 className='LeaseBeats-heading'>Lease Beats</h1>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>

  );
};

export default LeaseBeats;
