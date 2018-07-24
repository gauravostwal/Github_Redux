import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addLogin } from '../../actions/addactions';
import { serviceRequest } from '../../services/services';

const mapDispatchtoProps = dispatch => ({
            login: (article) => {
                dispatch(addLogin(article));
            },
        });

class Log extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };
    }

    handleChangeofSearch=(event, value) => {
        this.setState({ title: value });
    }

handleSubmit=() => {
        const title = this.state.title;
        this.waitForSecond(title);
}

async waitForSecond(title) {
        const { login } = this.props;
        const pass = await serviceRequest(title);
        login({ pass });
}

    render() {
        return (

          <div className="container">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div className="item-6" key="1">
                  <h3 className="text-center" key="2">
                     Login
                  </h3>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3" />
                      <div className="col-md-8 ">

                        <TextField hintText="Type your name" className="input-tag" value={this.state.title} onChange={this.handleChangeofSearch} />
                      </div>
                      <div className="col-md-1" />
                    </div>

                  </div>
                  <hr />
                  <div className="row down">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                      <Link to={`/login/${this.state.title}`}>
                        <RaisedButton label="Login" backgroundColor="#52676b" fullWidth="true" onClick={this.handleSubmit} />
                      </Link>
                    </div>
                    <div className="col-md-2" />
                  </div>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        );
    }
}
const Login = connect(null, mapDispatchtoProps)(Log);
export default Login;
