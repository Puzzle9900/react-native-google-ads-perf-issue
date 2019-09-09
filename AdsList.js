import React, {PureComponent, memo} from 'react';
import {FlatList, View} from 'react-native';
import PublisherBanner from './PublisherBanner';

const PureComp = memo(({index}) => {
  if (index % 2 === 0) {
    return (
      <View
        style={{
          margin: 2,
          backgroundColor: 'red',
          width: 200,
          height: 400,
        }}
      />
    );
  }

  return (
    <View style={{padding: 16}}>
      <PublisherBanner
        adSize="banner"
        adUnitID="/6499/example/banner"
        testDevices={[PublisherBanner.simulatorId]}
        onAdFailedToLoad={error => console.error(error)}
        onAppEvent={event => console.log(event.name, event.info)}
      />
    </View>
  );
});

class AdsList extends PureComponent {
  constructor(props) {
    super(props);
    this.contentList = Array(100).fill(0);
  }

  renderItem = ({index}) => {
    return <PureComp index={index} />;
  };

  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <FlatList
        data={this.contentList}
        renderItem={this.renderItem}
        initialNumToRender={5}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default AdsList;
