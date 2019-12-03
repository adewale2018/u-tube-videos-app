import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.term) {
      this.props.onTermSubmit(this.state.term); 
    }
  }
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.handleSubmit}>
          <div className='field'>
            <label>Search for videos</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
