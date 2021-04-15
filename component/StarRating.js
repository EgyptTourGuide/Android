
import React from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Star extends React.Component{

  constructor(props) {
    super(props)
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
        <View>
      <StarRating
        disabled={true}
        activeOpacity={0.5}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={18}
        rating={this.props.rate}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'#fdb827'}
      />
      </View>
    );
  }
}

