import React from 'react';
import { connect } from 'react-redux';
import Searchbar from '../Searchbar/search';
import Usercomponentview from '../Usercomponentview/usercomponentview';
import Sort from '../Sorting/sorting';
import Fill from '../FIlter/filter';

const mapStatetoProps = (state) => {
    return { articles: state.articles };
};

class Apple extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ dummy: [] });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles !== this.props.articles) {
            this.setState({ dummy: nextProps.articles });  
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Searchbar />
                        <Sort />
                        <Fill />
                    </div>
                    <div className="col-md-8">
                        {this.state.dummy !== undefined ? <Usercomponentview /> : <hr />}
                    </div>
                </div>
            </div>
        );
    }
}
const App = connect(mapStatetoProps)(Apple);
export default App;
