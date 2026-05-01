using ConstruSoftTicket.Application.DTOs;
using ConstruSoftTicket.Application.Interfaces;
using ConstruSoftTicket.Domain.Entities;

namespace ConstruSoftTicket.Application.Services;

public class TicketService : ITicketService
{
    private readonly ITicketRepository ticketRepository;

    public TicketService(ITicketRepository ticketRepository)
    {
        this.ticketRepository = ticketRepository;
    }

    public void CrearTicket(CreateTicketDto dto)
    {
        var ticket = new Ticket
        {
            Id = Guid.NewGuid(),
            Titulo = dto.Titulo,
            Description = dto.Description,
            FechaCreacion = DateTime.UtcNow,
            Estado = "Abierto"
        };

        ticketRepository.Add(ticket);
    }
}