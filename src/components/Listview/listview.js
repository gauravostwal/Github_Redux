import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStatetoProps = state => ({ articles: state.articles, sort: state.sort });

class Listview extends React.Component {
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
          <div>
            <table className="table item-3 table-striped">
              <thead className="heading">
                <tr>
                  <th>
                            Sr no.
                  </th>
                  <th>
                            Name
                  </th>
                  <th>
                            Profile Url
                  </th>
                  <th>
                            Profile Type
                  </th>
                  <th>
                            Score
                  </th>
                </tr>
              </thead>
              {this.props.articles !== undefined ? this.props.articles.map((person, index) => (
                <tbody>
                  <tr>
                    <td>
                      { ++index }
                    </td>
                    <td>
                      <Link to={`/users/${person.login}`}>
                        {person.login}
                      </Link>
                    </td>
                    <td>
                      {person.url}
                    </td>
                    <td>
                      {person.type}
                    </td>
                    <td>
                      {person.score}
                    </td>
                  </tr>
                </tbody>
               ))

               : <hr />}
            </table>
          </div>
        );
    }
}
const List = connect(mapStatetoProps)(Listview);
export default List;
