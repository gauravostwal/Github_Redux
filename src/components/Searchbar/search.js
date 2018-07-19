import React from 'react';
import { connect } from 'react-redux';
import { addArticle, addView } from '../../actions/addactions';

const mapDispatchToProps = (dispatch) => {
    return {

        article: (article) => {
            dispatch(addArticle(article));
        },
        viewsee: (view) => {
            dispatch(addView(view));
        }

    };
};

const mapStatetoProps = (state) => {
    return { articles: state.articles };
};

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            views: 'list_view'
        };
    }

    handleChangeofSearch = (event) => {
        this.setState({ title: event.target.value });
        const title = event.target.value;
        const { article } = this.props;
        article({ title });
    }

    handleListThing = (event) => {
        this.setState({ views: event.target.value });
        const view = event.target.value;
        const { viewsee } = this.props;
        viewsee({ view });
    }

    render() {
        return (
            <div className="item-2" key="1">
                <h3 className="text-center" key="2">
                    Searching
                </h3>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <input type="text" className="form-control justify-content-center search-box" value={this.state.isName} placeholder="Search..." onChange={e => this.handleChangeofSearch(e)} />
                        </div>
                        <div className="col-md-2" />
                    </div>
                    <div className="row down">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <select value={this.state.views} onChange={this.handleListThing} id="select-man" className="custom-select form-control">
                                <option value="" disabled selected>
                                    Option for Views
                                </option>
                                <option value="list_view">
                                    List View
                                </option>
                                <option value="Grid_view">
                                    Grid View
                                </option>
                            </select>
                        </div>
                        <div className="col-md-2" />
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

const Form = connect(mapStatetoProps, mapDispatchToProps)(Searchbar);
export default Form;
