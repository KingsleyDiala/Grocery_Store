import React from 'react';
import '../resources/reset.css';
import Contact_section from '../resources/components/Contact_Section/contact_section';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import { motion } from 'framer-motion';



// =============== JSX STRUCTURE ==================
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='contact'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Contact'}
        path={'/contact'}
        />
        {/* =========== CONTACT SECTION ========== */}
        <Contact_section />
        </motion.div>
  )
}

export default Contact;