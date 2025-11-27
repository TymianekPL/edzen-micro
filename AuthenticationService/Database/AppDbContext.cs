using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace AuthenticationService.Database
{
    public sealed class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; } = ();
    }
}
