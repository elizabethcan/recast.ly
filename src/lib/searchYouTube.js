import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  console.log('searchYouTube called');
  var params = {
    key: YOUTUBE_API_KEY,
    part: 'snippet',
    q: options.q,
    maxResults: options.maxResults,
    type: 'video'
  };
  var baseURL = 'https://www.googleapis.com/youtube/v3/search';
  $.get(baseURL, params, function(data) { callback(data.items); }, 'json');
};

export default searchYouTube;
