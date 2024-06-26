import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { useState } from 'react'
import '@/App.css'


// ---| VIEWS |===========================================================|
import Welcome from '@/views/welcome/index.jsx'
import Users from '@/views/users/index.jsx'

import Postagens from '@/views/postagens/index.jsx'
import PostagensMore from '@/views/postagens/actions/more/index.jsx'
import PostagensEdit from '@/views/postagens/actions/edit/index.jsx'
import PostagensCreated from '@/views/postagens/actions/created/index.jsx'
import IN from '@/views/log/in/index.jsx';
import UP from '@/views/log/up/index.jsx';
import ME from '@/views/log/me/index.jsx';
import Chat from '@/views/chat/index.jsx';
// ---|===================================================================|

import Layouts from '@/layouts/index.jsx'
import LoggIn from '@/layouts/loggin.jsx'

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Layouts><Welcome/></Layouts>} />
          <Route exact path="/entrar?" element={<LoggIn><IN/></LoggIn>} />
          <Route exact path="/registrar" element={<LoggIn><UP/></LoggIn>} />
          <Route exact path="/me?" element={<LoggIn><ME/></LoggIn>}/>

          <Route exact path="/postagens/" element={<Layouts><Postagens/></Layouts>} />
          <Route exact path="/postagens/c" element={<Layouts><PostagensCreated/></Layouts>} />
          <Route exact path="/postagens/e/:id" element={<Layouts><PostagensEdit/></Layouts>} />
          <Route exact path="/postagens/m/:id" element={<Layouts><PostagensMore/></Layouts>} />

          <Route exact path="/usuarios/" element={<Layouts><Users/></Layouts>} />
          <Route exact path="/chat/" element={<Chat/>} />
        </Routes>
    </Router>
  )
}

export default App
