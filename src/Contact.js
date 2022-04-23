import React from 'react'
import styled from 'styled-components'
import Contact_section from './resources/components/Contact_Section/contact_section'
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation'

// ============= STYLED COMPONENT ===============





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

export default Contact