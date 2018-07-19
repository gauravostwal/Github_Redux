import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProfile } from '../../actions/addactions';
import { serviceRequest, serviceRepoRequest } from '../../services/services';

const mapStateToProps = (state) => {
    return { profiles: state.profiles, repo: state.repo };
};
const mapDispatchToProps = (dispatch) => {
    return {
        profile: (article, articlerepo) => {
            dispatch(addProfile(article, articlerepo));
        }
    };
};

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
        if (nextProps.profile !== this.props.profile) {
            this.setState({ profile: nextProps.profile, repo: nextProps.repo });  
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
                        <p className="text-center top-bar">
                            {personinfo.login}
                        </p>
                        <div className="jumbotron bg-steelblue side-bar">
                            <span className="font-weight-bold">
                                Account Created On:
                            </span>
                            <span>
                                {personinfo.created_at}
                            </span>
                        </div>

                        <div className="jumbotron bg-steelblue side-bar">
                            <span className="font-weight-bold">
                                Updated on:
                            </span>
                            <span>
                                {personinfo.updated_at}
                            </span>

                        </div>
                    </div>

                </div>
                <div className="col-md-7 top-bar">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-column ">
                            <div className="p-3 ">
                                {personinfo.public_repos}
                            </div>
                            <p className="font-weight-bold text-filter">
                                Repository
                            </p>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="p-3">
                                {personinfo.followers}
                            </div>
                            <p className="font-weight-bold  text-filter">
                                <Link to={'/followers/' + personinfo.login} className="text-filter">
                                    Followers
                                </Link>
                            </p>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="p-3">
                                {personinfo.following}
                            </div>
                            <p className="font-weight-bold  text-filter">
                            <Link to={'/following/' + personinfo.login} className="text-filter">
                                Following
                            </Link>
                            </p>
                        </div>
                        
                    </div>
                    <div className="hello">
                        {repo.map((item, index) => (
                                <div className="item-4">
                                <p key={index} className="text-center">
                                    {item}
                                </p>
                                </div>
                        ))}
                    </div>
                </div>
    
            </div>

        </div>
        );
    }
}
const Pro = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Pro;
