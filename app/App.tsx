import React from 'react';
import { Speech, Physical, Cognitive, Auditory, About, Contact} from './containers'
import Navbar from './components/navbar/navbar'
const App = () => (
    <div className="App">
<Navbar />
<div/>
<Speech />
 <Physical />
 <Cognitive />
 <Auditory />
 <About />
 <Contact />
 </div>

)