import React from 'react';
import { connect } from 'react-redux';
import { addSort } from '../../actions/addactions';

const mapStatetoProps = (state) => {
    return { articles: state.articles };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        sortlist: (sortdata) => {
            dispatch(addSort(sortdata));
        }
    };
};

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

    handleSortThing = (event) => {
        const data = event.target.value; 
        this.setState({ sort: event.target.value });
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
                                <select value={this.state.sort} onChange={this.handleSortThing} placeholder="Select from the items" id="select-man" className="custom-select form-control">
                                    <option value="" disabled selected>
                                        Select your option
                                    </option>
                                    <option value="score_ascending">
                                        Score Ascending
                                    </option>
                                    <option value="score_descending">
                                        Score Descending
                                    </option>
                                    <option value="name_ascending">
                                        Name ascending
                                    </option>
                                    <option value="name_descending">
                                        Name Descending
                                    </option>
                                </select>
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
