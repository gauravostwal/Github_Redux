import React from 'react';
import { connect } from 'react-redux';
import { addFollowers } from '../../actions/addactions';
import { serviceFollowRequest } from '../../services/services';

const mapStateToProps = state => ({ articles: state.articles, follower: state.follower });

const mapDispatchToProps = dispatch => ({
        follow: (article) => {
            dispatch(addFollowers(article));
        },
    });

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ follower: [] });
    }

    async componentWillMount() {
        const data = this.props.match.params.id;
        const { follow } = this.props;
        const info = await serviceFollowRequest(data);
        follow({ info });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.follower !== this.props.follower) {
            this.setState({ follower: nextProps.follower });
        }
    }

    render() {
        const followers = this.props.follower;
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="item-5">
                    <h2 className="text-center">
                                        Followers
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" />

                {followers.map(follow => (
                  <div className="col-md-4">
                    <div className="item-5">
                      <img className="image-attack" src={follow.avatar_url} />
                      <h3 className="text-center">
                        {follow.login}
                      </h3>
                    </div>
                  </div>
                                    ))}
              </div>

            </div>
          </div>
        );
    }
}
const Follow = connect(mapStateToProps, mapDispatchToProps)(Followers);
export default Follow;
