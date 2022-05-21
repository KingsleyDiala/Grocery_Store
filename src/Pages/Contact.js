import React from 'react';
import '../resources/reset.css';
import Contact_section from '../resources/components/Contact_Section/contact_section';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';



// =============== JSX STRUCTURE ==================
const Contact = () => {
  return (
        <div className='contact'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Contact'}
        path={'/contact'}
        />
        {/* =========== CONTACT SECTION ========== */}
        <Contact_section />
        </div>
  )
}

export default Contact;