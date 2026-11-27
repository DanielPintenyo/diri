import React from 'react';

interface ListaInstantesProps {
  instantes: Date[];
  onBorrar: (index: number) => void;
}

const ListaInstantes: React.FC<ListaInstantesProps> = ({
  instantes,
  onBorrar
}) => {
  return (
    <div className="listaInstantes">
      <h2>Lista de instantes guardados</h2>

      {instantes.length === 0 ? (
        <p>Todavía no hay instantes guardados.</p>
      ) : (
        <ul>
          {instantes.map((instante, index) => (
            <li key={`${instante.getTime()}-${index}`}>
              <strong>Instante {index + 1}:</strong>{' '}
              {instante.toLocaleTimeString('es-ES')}

              <button onClick={() => onBorrar(index)}>
                Borrar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaInstantes;