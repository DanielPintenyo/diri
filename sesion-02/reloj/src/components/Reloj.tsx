import React, { useEffect, useState } from 'react';
import ListaInstantes from './ListaInstantes';

const Reloj: React.FC = () => {
  // Estado de la hora actual
  const [horaActual, setHoraActual] = useState<Date>(new Date());

  // Inicializar los instantes desde localStorage
  const [instantes, setInstantes] = useState<Date[]>(() => {
    const saved = localStorage.getItem('instants');

    return saved ? JSON.parse(saved).map(
      (fecha: string) => new Date(fecha)
    ) : [];
  });

  // Actualizar el reloj cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHoraActual(now);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Guardar los instantes en localStorage
  useEffect(() => {
    localStorage.setItem('instants', JSON.stringify(instantes));
  }, [instantes]);

  // Guardar el instante actual
  const guardarInstante = () => {
    setInstantes((instantesAnteriores) => [
      ...instantesAnteriores,
      new Date()
    ]);
  };

  // Formatear la hora
  const formatoHora = (fecha: Date): string => {
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
  };

  return (
    <div className="reloj">
      <h1>Reloj interactivo</h1>

      <div className="hora">
        {formatoHora(horaActual)}
      </div>

      <button onClick={guardarInstante}>
        Guardar instante
      </button>

      <ListaInstantes instantes={instantes} />
    </div>
  );
};

export default Reloj;

