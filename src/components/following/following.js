import React from 'react';
import { connect } from 'react-redux';
import { addFollowing } from '../../actions/addactions';
import { serviceFollowingRequest } from '../../services/services';

const mapStateToProps = state => ({ articles: state.articles, following: state.following });

const mapDispatchToProps = dispatch => ({
        followin: (article) => {
            dispatch(addFollowing(article));
        },
    });

class Followings extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ following: [] });
    }

    async componentWillMount() {
        const data = this.props.match.params.id;
        const { followin } = this.props;
        const info = await serviceFollowingRequest(data);
        followin({ info });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.following !== this.props.following) {
            this.setState({ following: nextProps.following });
        }
    }

    render() {
        return (
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="item-5">
                    <h2 className="text-center">
                                        Following
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12" />
                {this.props.following.map(follow => (
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
const Following = connect(mapStateToProps, mapDispatchToProps)(Followings);
export default Following;
