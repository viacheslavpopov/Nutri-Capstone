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
          new Supplement { SupplementId = 1, Type = "Herb", Name = "Milk Thistle", Dosing = "According to research, the therapeutic threshold may be around 225mg per day.", Contraindications = "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction."},
          new Supplement { SupplementId = 2, Type = "Vitamin", Name = "Vitamin A", Dosing = "Consult this webpage to find your appropriate dosing: https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/. Keep in mind that Vitamin A is stored in the body long-term, and therefore accumulates. For optimal health, ", Contraindications = "Preformed Vitamin A (as opposed to provitamin A as beta-carotene, which is water-soluble) is fat-soluble, which means that it can accumulate in the body and cause potential toxicity. If you are concerned about this, consult a physician about what dose is right for you."},
          new Supplement { SupplementId = 1, Type = "Herb", Name = "Gymnema Sylvestre", Dosing = "According to Dr. Axe, a general recommended gymnema sylvestre dosage is a 100-milligram capsule, taken up to four times daily. It’s best to start with one capsule and gradually increase your dose, paying attention to any adverse effects.", Contraindications = "High doses taken long-term (over a 20-month period) may lead to: hypoglycemia, weakness, shakiness, excessive sweating, or muscular dystrophy. This should also not be taken alongside blood-sugar-lowering medications unless prescribed by your doctor."},
          new Supplement { SupplementId = 1, Type = "Vitamin", Name = "Vitamin D", Dosing = "Dosing can range from 500IU to upwards of 25,000IU. This will depend on your current Vitamin D status. A doctor can order a blood test to find this out. Optimal Vitamin D levels in the body are 40-65 ng/mL.", Contraindications = "Research suggests that toxicity does not occur until you have reached above 80 ng/mL AND blood calcium levels increase. Vitamin D can be taken with any other vitamin or herb. "}
        );
    }
  }
}