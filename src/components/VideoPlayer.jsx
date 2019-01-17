class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentUrl: `https://www.youtube.com/embed/${this.props.video.id.videoId}`, currentVideo: this.props.video};
  }
  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.state.currentUrl} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.state.currentVideo.snippet.title}</h3>
          <div>{this.state.currentVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
