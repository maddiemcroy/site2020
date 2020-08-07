import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import { BREAKPOINTS } from './breakpoints'

const PageContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  outline: solid 1px #8e7cc3;
  background-color: #fff;
  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 80%;
  }
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 100%;
    min-height: 100vh;
    margin: 0;
  }
`;

const Content = styled.div`
  padding: 20px;
`

function App() {
  return (
    <div className="App">
      <PageContainer>
        <NavBar />
        <Content>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/resume' component={ResumePage} />
            <Route path='/projects' component={ProjectsPage} />
          </Switch>
        </Content>
      </PageContainer>
    </div>
  );
}

export default App;
