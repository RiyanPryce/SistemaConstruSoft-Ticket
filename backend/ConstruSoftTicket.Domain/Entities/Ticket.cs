public class Ticket
{
    public Guid Id { get; private set; }
    public string Titulo { get; private set; }
    public string Description { get; private set; }
    public DateTime FechaCreacion { get; private set; }
    public string Estado { get; private set; }

    public Ticket(string titulo, string description)
    {
        Id = Guid.NewGuid();
        Titulo = titulo;
        Description = description;
        FechaCreacion = DateTime.UtcNow;
        Estado = "Abierto";
    }
}