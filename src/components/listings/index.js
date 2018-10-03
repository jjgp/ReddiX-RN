/**
 * @prettier
 */

import React from 'react';
import {connect} from 'react-redux';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {fetchChildren} from '../../redux/actions/listings';
import {Child} from '../child';

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {};

  componentWillMount() {
    this.props.fetchChildren();
  }

  render() {
    const {children} = this.props;
    return (
      <>
        <SearchBar lightTheme={true} placeholder="Subreddit" platform="ios" />
        <ScrollView
          style={{flex: 1, backgroundColor: '#EBEBEB', marginTop: 5}}
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}>
          {children && <FlatList data={children} keyExtractor={item => item.id} renderItem={Child} />}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({listings: {children}}) => ({
  children,
});

const mapDispatchToProps = dispatch => ({
  fetchChildren: (replacement = false) => dispatch(fetchChildren(replacement)),
});

export default (Listing = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Listing));
