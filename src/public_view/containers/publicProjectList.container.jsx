import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/cardList.component';
import { addProjectFromDb, selectProject } from '../actions/public.action';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-materialize';
import { getProjects } from '../../databaseAPI';

export default class ProjectList extends Component {
  componentWillMount() {
    getProjects(console.log)

  }

  render() {
    return (
      <Row>
        <Col s={12} m={6} l={6}>
          <div>
            <h3> Select your project</h3>
            <CardList
              clickHandler={this.props.selectProject}
              intro={this.props.ProjectSelected}
              list={this.props.Projects}
              view="projects"
            />
          </div>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ projects, projectSelected }) {
  return { projects, projectSelected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addProjectFromDb, selectProject }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
