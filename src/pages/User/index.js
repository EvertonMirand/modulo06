import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Avatar, Name, Bio } from './styles';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  constructor(props) {
    super(props);
    this.state = {
      stars: [],
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: response.data,
    });
  }

  render() {
    const { navigation } = this.props;
    const { start } = this.state;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar
            source={{
              uri: user.avatar,
            }}
          >
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Avatar>
        </Header>
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};
