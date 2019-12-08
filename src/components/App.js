import React from "react";
import SearchBar from "./SearchBar";
import YouTube, { baseParams } from "./api/YouTube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }
  componentDidMount() {
    this.onTermSubmit("buildings");
  }
  onTermSubmit = async term => {
    const response = await YouTube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
