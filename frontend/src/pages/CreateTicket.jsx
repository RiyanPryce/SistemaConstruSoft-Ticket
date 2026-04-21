import { useState } from "react";

export default function CreateTicket() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ titulo, descripcion });
  };

  return (
    <div>
      <h2>Crear Ticket</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>

        <div>
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </div>

        <button type="submit">Registrar ticket</button>
      </form>
    </div>
  );
}