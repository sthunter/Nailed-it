import React, { Component } from 'react';
import { connect} from 'react-redux';
import CardList from '../components/cardList.component';
import { addProjectFromDb, selectProject } from '../actions/public.action';
import { bindActionCreators } from 'redux';
import { Row, Col, Modal, Button } from 'react-materialize';
import { changeRoute } from '../../routing/actions/routing.action';

export default class ProjectList extends Component {
  componentWillMount() {
    this.props.addProjectFromDb();
    this.props.changeRoute(this.props.location.pathname);
  }

  render() {
    return (
      <Row>
      <h3> List of Public Projects</h3>
        <Col s={12} m={12} l={12}>
          <div>
            <CardList
              clickHandler={this.props.selectProject}
              intro={this.props.projectSelected}
              lists={this.props.projects}
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
  return bindActionCreators({ addProjectFromDb, selectProject, changeRoute }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
