import React from "react";
import SearchBar from "./SearchBar";
import YouTube, { baseParams } from "./api/YouTube";
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }
  onTermSubmit = async term => {
    const response = await YouTube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });

    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "20px" }}>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
