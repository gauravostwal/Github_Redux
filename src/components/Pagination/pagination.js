import React from 'react';
import { connect } from 'react-redux';
import { addPagination } from '../../actions/addactions';
 
const mapDispatchProps = (dispatch) => {

};
class Pagination extends React.Component {

    constructor(props){
        super(props);
        this.state={currentpage:1, todosperpage:5};
    }
    render(){
        return(

        );
    }
}
const page = connect(mapDispatchProps)(Pagination);
export default page;
