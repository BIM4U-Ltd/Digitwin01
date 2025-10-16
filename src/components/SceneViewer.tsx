import React from 'react';

const SceneViewer = ({ sceneId = 'Home' }) => {
  const viewerUrl = `https://digitwin01.api.uks.digitaltwins.azure.net/scenesstudio/viewer?sceneId=${Home1}`;
  return (
    <iframe
      src={viewerUrl}
      width="100%"
      height="800px"
      frameBorder="0"
      allowFullScreen
      title="Azure 3D Scene"
    />
  );
};

export default SceneViewer;