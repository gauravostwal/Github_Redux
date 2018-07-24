import React from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = state => ({ articles: state.articles });

class Gridview extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ dummy: [], index: null, open: false });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles !== this.props.articles) {
            this.setState({ dummy: nextProps.articles });
        }
    }

    viewthecontent = (e, index) => {
        const elem1 = document.getElementById('display-on');
        this.setState({ index, open: true });
        elem1.style.display = 'block';
        if (this.state.open === true) {
            this.setState({ open: false });
        } else {
            this.setState({ open: true });
        }
    }

    render() {
        return (
          <div>
            {this.props.articles !== undefined ? this.props.articles.map((person, index) => (
              <div className="item-1" key={person.id}>
                <img className="image-attack" src={person.avatar_url} />
                <h3 className="text-center">
                  {person.login}
                </h3>
                <h6 className="text-center">
                            Profile:
                  {person.url}
                </h6>
                <h6 className="text-center">
                            Score:
                  {person.score}
                </h6>
                <button className="btn btn-primary" type="button" id="display-on" onClick={e => this.viewthecontent(e, index)}>
                            Details
                </button>
                {index === this.state.index && this.state.open === true
                            ? (
                              <div className="row" id="data-table">

                                <div className="col-md-12 col-lg-12 col-sm-12 table-down">
                                  <table className="table table-border">
                                    <thead className="thead-dark table-border">
                                      <tr className="table-border">

                                        <th>
                                                        Repository Url
                                        </th>
                                        <th>
                                                        Profile Url
                                        </th>
                                        <th>
                                                        Score
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>

                                        <td>
                                          {person.repos_url}
                                        </td>
                                        <td>
                                          {person.type}
                                        </td>
                                        <td>
                                          {person.score}
                                        </td>
                                      </tr>

                                    </tbody>
                                  </table>

                                </div>

                              </div>)
                            : <hr />}
              </div>
                ))

                    : <hr />}
          </div>
        );
    }
}
const Grid = connect(mapStatetoProps)(Gridview);
export default Grid;
