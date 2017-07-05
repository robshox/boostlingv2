import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {

    const { page, seed } = this.state;
    const url = `http://app.boostling.com/api/getfolders`;/*`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`*/
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res : [...this.state.data, ...res],
          /*data: page === 1 ? res.results : [...this.state.data, ...res.results],*/
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        console.log(this.state);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  render() {
    return (

      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>

        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.name} ${item.name}`}
              subtitle={item.email}
              containerStyle={{ borderBottomWidth: 0.5  }}
            />
          )}
          keyExtractor={item => item.email}
        />
      </List>

    );
  }
}

export default FlatListDemo;
