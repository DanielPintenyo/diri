
import React from 'react';
import Item from './ActivityItem';

const Content: React.FC = () => {
  return (
    <div className="content">
      <div className="line"></div>

      <Item
        valorAlt="Francisca"
        time="Hace una hora"
        description="Fui a comer con amigos"
      />

      <Item
        valorAlt="Paco"
        time="10:00 am"
        description="Leí un artículo sobre tecnología"
      />

      <Item
        valorAlt="Quica"
        time="10:00 am"
        description="Escribí notas sobre un proyecto importante"
      />

      <Item
        valorAlt="Curro"
        time="2:21 pm"
        description="Preparé la presentación para la reunión de mañana"
      />
    </div>
  );
};

export default Content;
