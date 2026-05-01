import { useState } from "react";

export default function CreateTicket() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("CLICK detectado");
    console.log("Datos enviados:", { titulo, descripcion });

    // Validación básica
    if (!titulo || !descripcion) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await fetch("/api/Ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          description: descripcion,
        }),
      });

      console.log("STATUS:", response.status);

      if (response.ok) {
        const text = await response.text();
        console.log("RESPUESTA BACKEND:", text);

        alert("Ticket registrado correctamente");

        // Limpiar formulario
        setTitulo("");
        setDescripcion("");
      } else {
        const error = await response.text();
        console.log("ERROR BACKEND:", error);

        alert("Error al registrar el ticket");
      }

    } catch (error) {
      console.error("ERROR FETCH:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h1>Registro de Ticket</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <button type="submit">Registrar ticket</button>
      </form>
    </div>
  );
}