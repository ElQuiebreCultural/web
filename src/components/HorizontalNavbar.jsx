import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
position: relative;
margin-right: 10px;
margin-bottom: ${(props) => (props.isOpen ? '10px' : '0')}; /* Añadir margen inferior si está abierto */

button {
  cursor: pointer;
  display: block; /* Asegurar que el botón ocupe todo el ancho del contenedor */
  width: 100%; /* Hacer que el botón ocupe todo el ancho del contenedor */
}

.dropdown {
  position: absolute;
  top: calc(100% + 5px); /* Ajustar la posición del desplegable */
  left: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0px 4px 8px #8E72D7;
  padding: 10px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOpen ? 0 : '-10px')});
  transition: opacity 0.3s ease, transform 0.3s ease;
}
`;

const DropdownButton = ({ label, items, isOpen, toggleDropdown }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      {/* Botón que activa/desactiva el desplegable */}
      <button onClick={toggleDropdown}>{label}</button>

      {/* Desplegable que se muestra si isOpen es true */}
      <div className="dropdown">
        {/* Mapear y renderizar los items dentro del desplegable */}
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </DropdownContainer>
  );
};

const HorizontalNavbar = () => {
  // Estado para rastrear qué botón está actualmente abierto
  const [openButton, setOpenButton] = useState(null);

  // Función para alternar el botón abierto
  const toggleOpenButton = (buttonLabel) => {
    setOpenButton(openButton === buttonLabel ? null : buttonLabel);
  };

  // Array de objetos que representan cada botón con sus respectivos items
  const buttons = [
    { label: 'Botón 1', items: ['Item A', 'Item B', 'Item C'] },
    { label: 'Botón 2', items: ['Item X', 'Item Y', 'Item Z'] },
    // Puedes agregar más botones con sus items aquí
  ];

  return (
    <div style={{ display: 'flex' }}>
      {/* Mapear y renderizar cada botón con sus respectivos items */}
      {buttons.map((button, index) => (
        <DropdownButton
          key={index}
          label={button.label}
          items={button.items}
          isOpen={openButton === button.label}
          toggleDropdown={() => toggleOpenButton(button.label)}
        />
      ))}
    </div>
  );
};

export default HorizontalNavbar;
