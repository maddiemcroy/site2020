import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import styled from 'styled-components'
import NavBar from './components/NavBar'

const PageContainer = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  outline: solid 1px #FFA083;
  background-color: #fff;
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
