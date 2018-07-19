import React from 'react';
import { connect } from 'react-redux';
import { addFilter } from '../../actions/addactions';

const mapDispatchToProps = (dispatch) => {
    return {
        fill: (article) => {
            dispatch(addFilter(article));
        }
    };
};

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ dummy: [], filter: '' });
    }

    handleRadioAll = (event) => {
        const data = event.target.value;    
        this.setState({ filter: event.target.value });
        const { fill } = this.props;
        fill({ data });
    }

    render() {
        return (
            <div>
                <div className="item-2">
                    <h3 className="text-center">
                        Filter
                    </h3>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-8">
                                
                                <input type="radio" id="customRadio1" name="optradio" value="All" onChange={e => this.handleRadioAll(e)} />
                                    <label>
                                        All Information
                                    </label>
                                
                            </div>
                            <div className="col-md-1" />
                        </div>
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-8">
                                
                                    <input type="radio" name="optradio" value="score_50" onChange={e => this.handleRadioAll(e)} />
                                    <label>
                                        Score less than 55
                                    </label>
                                
                            </div>
                            <div className="col-md-1" />
                        </div>

                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-8">
                                
                                    <input type="radio" name="optradio" value="score_50_100" onChange={e => this.handleRadioAll(e)} />
                                    <label>
                                        Score between 50-100
                                    </label>
                                
                            </div>
                            <div className="col-md-1" />
                        </div>

                        <div className="row">
                            <div className="col-md-3" />
                            <div className="col-md-9">
                                
                                    <input type="radio" name="optradio" value="score_100" onChange={e => this.handleRadioAll(e)} />
                                    <label>
                                        Score greater than 100
                                    </label>
                               
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>);
    }
}
const Fill = connect(null, mapDispatchToProps)(Filter);
export default Fill;
