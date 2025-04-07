
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import ViewPost from './pages/ViewPost'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/posts/:id" element={<ViewPost/>}/>
      <Route path="/post/:id" element={<ViewPost/>}/>
      <Route path="create" element={<CreatePost/>}/>
      <Route path="/edit/:id" element={<EditPost/>}/>
    </Routes>
      
    </>
  )
}

export default App
