import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { addComment, addId } from '../../actions/addactions';

const mapStateToProps = (state) => {
    console.log('>>>state.repobasedname', state.repobasedname); 
    return { 
      profiles: state.profiles, comment: state.repo_comment, logg: state.logg, repobasedname: state.repobasedname,
    };
};
const mapDispatchToProps = dispatch => ({
        commenting: (article, articlerepo, avatarurl) => {
            dispatch(addComment(article, articlerepo, avatarurl));
        },
        addrepo: (data) => {
            dispatch(addId(data));
        },
    });

class Repo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: '', repo_comment: [], repobase: [] };
    }

    componentWillMount() {
        const data = this.props.match.params.id;
        const { addrepo } = this.props;
        addrepo({ data });
    }

    componentWillReceiveProps=(nextProps) => {
        if (nextProps.comment !== this.props.comment) {
            this.setState({ repo_comment: nextProps.comment });
        }
        if (nextProps.repobasedname !== this.props.repobasedname) {
            this.setState({ repobase: nextProps.repobasedname });
        }
    }

    handleChangeofSearch = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleComment = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        const avatarurl = this.props.logg.avatar_url;
        const com = this.state.comment;
        this.setState({ comment: '' });
        const { commenting } = this.props;
        commenting(id, com, avatarurl);
    }

    render() {
        const { comment } = this.props;
        const { logg } = this.props;
        const { repobasedname } = this.props;
        const personinfo = this.props.profiles;
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
              <div className="col-md-7 form-group">
                <textarea className="form-control" rows="6" id="comment" value={this.state.comment} placeholder="Write a comment about repository" onChange={this.handleChangeofSearch} />
              </div>
            </div>

            <div className="row">
              <div className="col-md-8" />
              <div className="col-md-4">
                <RaisedButton label="Submit" backgroundColor="#1190B4" onClick={this.handleComment} />
              </div>
            </div>

            <div className="container">
              <div className="row">
              <div className="col-md-1" />
                <div className="col-md-3">
                  <div className="item-5">
                      <h4 className="text-center">
                        Repository name
                      </h4>
                      <hr />
                      <h5 className="text-center">
                        {this.props.match.params.id}
                      </h5>
                      <hr />
                  </div>
                </div>
                <div className="col-md-2" />
                <div className="col-md-6">    
                  {repobasedname.map(item => (
                    <div className="item-5">
                      <div className="row">
                            <div className="col-md-2">
                                <img src={item.avatarurl} className="image-atta" />
                            </div>
                            <div className="col-md-10">
                               <p>
                               {item.comment}
                               </p>
                            </div>
                      </div>
                    </div>
                 ))}
                </div>
                
              </div>
            </div>

          </div>
        );
    }
}
const Repository = connect(mapStateToProps, mapDispatchToProps)(Repo);
export default Repository;
