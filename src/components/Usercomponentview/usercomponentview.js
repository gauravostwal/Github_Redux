import React from 'react';
import { connect } from 'react-redux';
import List from '../Listview/listview';
import Grid from '../Gridview/gridview';

const mapStatetoProps = state => ({ articles: state.articles, view: state.view });

class Usercomponentview extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ dummy: [], dummyview: [] });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.view !== this.props.view) {
            this.setState({ dummyview: nextProps.view });
        }

        if (nextProps.articles !== this.props.articles) {
            this.setState({ dummy: nextProps.articles });
        }
    }

    render() {
        return (
          <div>
            {this.state.dummyview.view !== 'Grid_view' ? <List /> : <Grid /> }
          </div>
        );
    }
}
const Userview = connect(mapStatetoProps)(Usercomponentview);
export default Userview;
