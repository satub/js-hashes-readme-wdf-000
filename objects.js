var playlist = {"artistName": "songTitle"};

function updatePlaylist(daPlaylist, artistName, songTitle){
  daPlaylist[artistName] = songTitle;
  return daPlaylist;
}

function removeFromPlaylist(daPlaylist, artistName){
  delete daPlaylist[artistName];
  return daPlaylist;
}
