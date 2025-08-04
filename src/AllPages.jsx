import React from 'react'
import NavBarHarsh from './NavBarHarsh'
import Services from './service'
import Gallery from './gellary'
import AboutUs from './about'
import Footer from './Footer'
import ContactSection from './contact'
// import Form from './Form'

// import Login from './component/Login'
// import Dashboard from './component/DarshMain'
// import ContactList from './component/ContactList'


const AllPages = () => {
  return (
    <div>
      <>
      <NavBarHarsh></NavBarHarsh>
         <Services></Services>
         <Gallery></Gallery>
        <AboutUs></AboutUs>
        <ContactSection></ContactSection>
         <Footer></Footer>
         {/* <Form></Form>
         <Login></Login>
         <Dashboard></Dashboard>
         <ContactList></ContactList>
          */}
         
      </>
    </div>
  )
}

export default AllPages
