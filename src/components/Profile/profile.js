import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProfile } from '../../actions/addactions';
import { serviceRequest, serviceRepoRequest } from '../../services/services';

const mapStateToProps = state => ({ profiles: state.profiles, repo: state.repo });
const mapDispatchToProps = dispatch => ({
        profile: (article, articlerepo) => {
            dispatch(addProfile(article, articlerepo));
        },
    });

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ profile: [] });
    }

    async componentWillMount() {
        const data = this.props.match.params.id;
        const { profile } = this.props;
        const infouser = await serviceRequest(data);
        const inforepo = await serviceRepoRequest(data);
        profile({ infouser, inforepo });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.profiles !== this.props.profiles) {
            this.setState({ profile: nextProps.profiles, repo: nextProps.repo });
        }
    }

    render() {
        const personinfo = this.props.profiles;
        const { repo } = this.props;
        return (
          <div className="container">
            <div className="row down">
              <div className="col-md-5  justify-content-center">
                <div className="d-flex flex-column">
                  <img className="image-attack" src={personinfo.avatar_url} />
                  <h3 className="text-center top-bar text-filter">
                    {personinfo.login}
                  </h3>
                </div>

              </div>
              <div className="col-md-7 top-bar">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column ">
                    <div className="p-3 ">
                      {personinfo.public_repos}
                    </div>
                    <h3 className="font-weight-bold text-filter">
                                Repository
                    </h3>
                  </div>

                  <div className="d-flex flex-column">
                    <div className="p-3">
                      {personinfo.followers}
                    </div>
                    <p className="font-weight-bold  text-filter">
                      <Link to={`/followers/${personinfo.login}`} className="text-filter">
                                    Followers
                      </Link>
                    </p>
                  </div>

                  <div className="d-flex flex-column">
                    <div className="p-3">
                      {personinfo.following}
                    </div>
                    <p className="font-weight-bold  text-filter">
                      <Link to={`/following/${personinfo.login}`} className="text-filter">
                                Following
                      </Link>
                    </p>
                  </div>

                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12">
                    <div className="item-5">
                      <h2 className="text-center">
                                        Repository
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12" />
              {repo.map((item, index) => (
                <div className="col-md-4">
                  <div className="item-5 repo-data">
                    <h3 key={index} className="text-center">
                      <Link to={`/issues/${item}`} className="repo-data">
                        {item}
                      </Link>
                    </h3>
                  </div>
                </div>
                ))}
            </div>

          </div>
        );
    }
}
const Pro = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Pro;
