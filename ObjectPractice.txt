const radio = {

  nowPlaying: function() {
    let radioRandom = radio.stations[Math.floor(Math.random() * 2)]; // choose the random radio station
    let radioNameSong = radioRandom.song[Math.floor(Math.random() * 3)];  // choose the random song from random picked station
    console.log(`Now playing "${radioNameSong.title}" by ${radioNameSong.artist} on ${radioRandom.name}`)
  },

  stations: [
    {
      name: 'Love FM',
      song: [
        {
          title: 'Unholy',
          artist: 'Sam Smith',
        }, {
          title: 'Under the influence',
          artist: 'Chris Brown'
        }, {
          title: 'Cuff it',
          artist: 'Beyonce'
        }]
    },
    {
      name: '105 FM',
      song: [{
        title: 'My mind',
        artist: 'Yebba'
      }, {
        title: 'Sacrafice',
        artist: 'The Weekend'
      }, {
        title: 'Anti-Hero',
        artist: 'Taylor Swift'
      }]
    }
  ]
}

radio.nowPlaying()