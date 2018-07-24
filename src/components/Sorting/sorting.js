import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { addSort } from '../../actions/addactions';

const mapStatetoProps = state => ({ articles: state.articles });

const mapDispatchToProps = dispatch => ({
        sortlist: (sortdata) => {
            dispatch(addSort(sortdata));
        },
    });

class Sorting extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ dummy: [], sort: '' });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles !== this.props.articles) {
            this.setState({ dummy: nextProps.articles });
        }
    }

    handleSortThing = (event, index, value) => {
        const data = value;
        this.setState({ sort: value });
        const { sortlist } = this.props;
        sortlist({ data });
    }

    render() {
        return (

          <div>
            <div className="item-2">
              <h3 className="text-center">
                        Sorting
              </h3>
              <hr />
              <div className="container">

                <div className="row down">
                  <div className="col-md-2" />
                  <div className="col-md-8">
                    <SelectField floatingLabelText="Sorting" value={this.state.sort} onChange={this.handleSortThing}>
                      <MenuItem value="score_ascending" primaryText="Score Ascending" />
                      <MenuItem value="score_descending" primaryText="Score Descending" />
                      <MenuItem value="name_ascending" primaryText="Name Ascending" />
                      <MenuItem value="name_descending" primaryText="Name Descending" />
                    </SelectField>
                  </div>
                  <div className="col-md-2" />
                </div>
              </div>
              <hr />
            </div>
          </div>

        );
    }
}

const Sort = connect(mapStatetoProps, mapDispatchToProps)(Sorting);
export default Sort;
