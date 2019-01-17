import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.state = {currentVideo: exampleVideoData[0], videos: exampleVideoData};
  }

  componentDidMount() {
    console.log(this.props);
    var options = {
      max: 5,
      query: '',
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, (data) => {
      console.log(data);
      this.setState({currentVideo: data[0], videos: data});
    });
  }

  handleListClick(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  handleSearchInput() {
    var options = {
      max: 5,
      query: $('input').val(),
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, (data) => {
      console.log(data);
      this.setState({currentVideo: data[0], videos: data});
    });
  }

  clickSearch() {
    this.handleSearchInput();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.handleSearchInput} clickSearch={this.clickSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} listClickHandler={this.handleListClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
