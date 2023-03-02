import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import { useState } from 'react';
function ContactComponent({ contact }) {
   const [newStatus, setStatus] = useState(false);

   const statusBoolean = () => {
      setStatus((status) => {
         return !status
      });
   }

   return (
      <div>
         <h2>Nombre: {contact.nombre}</h2>
         <h3>Apellido: {contact.apellido}</h3>
         <h4>Email: {contact.email}</h4>
         <h5>Status Connected: {newStatus === true ? 'En linea' : 'Desconectado'}</h5>
         <button onClick={statusBoolean}>Cambiar status</button>
      </div>
   )
}

ContactComponent.propTypes = {
   task: PropTypes.instanceOf(Contact)
}

export default ContactComponent;

