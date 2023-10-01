import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './components/News'
import Navbar from './components/Navbar'
import { BrowserRouter , Route, Routes} from 'react-router-dom'

export class App extends Component {
  static propTypes = {

  }

  render() {
    const pageSize=6;
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News pageSize={pageSize} category={'general'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/science" element={<News pageSize={pageSize} category={'science'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/business" element={<News pageSize={pageSize} category={'business'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/entertainment" element={<News pageSize={pageSize} category={'entertainment'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/health" element={<News pageSize={pageSize} category={'health'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/sports" element={<News pageSize={pageSize} category={'sports'}/>}> </Route>
        </Routes>
        <Routes>
          <Route path="/technology" element={<News pageSize={pageSize} category={'technology'}/>}> </Route>
        </Routes>
      
        </BrowserRouter>
      </div>
    )
  }
}

export default App

