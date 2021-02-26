using Microsoft.EntityFrameworkCore;

namespace NutriAPI.Models
{
  public class NutriAPIContext : DbContext
  {
    public NutriAPIContext(DbContextOptions<NutriAPIContext> options):base(options)
    {
    }
    public DbSet<Supplement> Supplements { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<Supplement>()
        .HasData(
          new Supplement { SupplementId = 1, Type = "Herb", Name = "Milk Thistle", Dosing = "According to research, the therapeutic threshold may be around 225mg per day.", Contraindications = "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction."}
        )
    }
  }
}