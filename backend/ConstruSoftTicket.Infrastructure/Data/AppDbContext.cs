using ConstruSoftTicket.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ConstruSoftTicket.Infrastructure.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    
    public DbSet<Ticket> Tickets => Set<Ticket>();
}