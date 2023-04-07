import React, {useEffect} from 'react'
import './assets/about.css';
import Feed from './feed/Feed';
import Topbar from './topbar/Topbar';
import Sidebar from './sidebar/Sidebar';
import Rightbar from './rightbar/Rightbar';


function About() {

  useEffect(() => {
    document.title = 'Renis - Social';
  }, []);

  return (
    <>
    <div direction={['column','row']}>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
    </>
  )
}

export default About
