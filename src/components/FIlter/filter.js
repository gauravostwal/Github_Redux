import React from 'react';
import { connect } from 'react-redux';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addFilter } from '../../actions/addactions';

const mapDispatchToProps = dispatch => ({
        fill: (article) => {
            dispatch(addFilter(article));
        },
    });

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

                    <MuiThemeProvider>
                      <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                        <RadioButton id="customRadio1" name="optradio" value="All" labelStyle={{ color: 'white' }} label="All" onClick={this.handleRadioAll} />
                        <RadioButton id="customRadio1" name="optradio" value="score_50" labelStyle={{ color: 'white' }} label="Score less than 50" onClick={e => this.handleRadioAll(e)} />
                        <RadioButton id="customRadio1" name="optradio" value="score_50_100" labelStyle={{ color: 'white' }} label="Score 50-100" onClick={e => this.handleRadioAll(e)} />
                        <RadioButton id="customRadio1" name="optradio" value="score_100" labelStyle={{ color: 'white' }} label="Score greater 100" onClick={e => this.handleRadioAll(e)} />

                      </RadioButtonGroup>
                    </MuiThemeProvider>
                  </div>
                  <div className="col-md-1" />
                </div>

              </div>
              <hr />
            </div>
          </div>);
    }
}
const Fill = connect(null, mapDispatchToProps)(Filter);
export default Fill;
