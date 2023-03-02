import React from 'react'
import PropTypes from 'prop-types'
import { Contact  } from '../../models/contact.class'
import ContactComponent from '../pure/contact';

function ContactRenderComp() {
   
   const defaultTask = new Contact('Miqueas',
      'Laz',
      'miqueaslazarte03@gmail.com',
      true);
   
   return (
      <div>
         <ContactComponent contact={defaultTask}></ContactComponent>
      </div>
   )
}

/* ContactRenderComp.propTypes = {

} */
export default ContactRenderComp;

