
import React from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Star extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
        <View style={{width:'10%'}}>
      <StarRating
        disabled={false}
        activeOpacity={0.1}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={4}
        starSize={23}
        containerStyle={{width:'60%',justifyContent:'flex-end',right:110}}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'#fdb827'}
      />
      </View>
    );
  }
}

