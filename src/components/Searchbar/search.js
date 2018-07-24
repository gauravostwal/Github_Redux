import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import { addArticle, addView } from '../../actions/addactions';

const mapDispatchToProps = dispatch => ({

        article: (article) => {
            dispatch(addArticle(article));
        },
        viewsee: (view) => {
            dispatch(addView(view));
        },

    });

const mapStatetoProps = state => ({ articles: state.articles });

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            views: 'listview',
        };
    }

    handleChangeofSearch = (event, value) => {
        this.setState({ title: value });
        const title = value;
        const { article } = this.props;
        article({ title });
    }

    handleListThing = (event, index, value) => {
        console.log(value);
        this.setState({ views: value });
        const view = value;
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
                <div className="col-md-8 ">

                  <TextField hintText="Hint Text" className="input-tag" value={this.state.title} onChange={this.handleChangeofSearch} />
                </div>
                <div className="col-md-2" />
              </div>
              <div className="row down">
                <div className="col-md-2" />
                <div className="col-md-8">
                  {/* <select value={this.state.views} onChange={this.handleListThing} id="select-man" className="custom-select form-control">
                                <option value="" disabled selected>
                                    Option for Views
                                </option>
                                <option value="list_view">
                                    List View
                                </option>
                                <option value="Grid_view">
                                    Grid View
                                </option>
                            </select> */}
                  <SelectField floatingLabelText="View" value={this.state.views} onChange={this.handleListThing}>
                    <MenuItem value="list_view" primaryText="List View" />
                    <MenuItem value="Grid_view" primaryText="Grid View" />
                  </SelectField>


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
