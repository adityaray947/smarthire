import React from 'react';
import Sidebar from '../component/sidebar.jsx'; 
import Information from '../component/information.jsx';
import Chatbar from '../component/chatbar.jsx';

function Home() {
  return (
    <div>
        <Sidebar/>  
        <Chatbar/>
        <Information/>
    </div>
  );
}

export default Home;
