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
          new Supplement { SupplementId = 1, Type = "Herb", Name = "Milk Thistle", Dosing = "According to research, the therapeutic threshold may be around 225mg per day.", Contraindications = "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction.", Maladies = "Liver Health, Skin Health, Blood Sugar Support, Detox Support"},
          new Supplement { SupplementId = 2, Type = "Vitamin", Name = "Vitamin A", Dosing = "Consult this webpage to find your appropriate dosing: https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/. Keep in mind that Vitamin A is stored in the body long-term, and therefore accumulates. For optimal health, ", Contraindications = "Preformed Vitamin A (as opposed to provitamin A as beta-carotene, which is water-soluble) is fat-soluble, which means that it can accumulate in the body and cause potential toxicity. If you are concerned about this, consult a physician about what dose is right for you.", Maladies = "Skin Health, Immune System Support, Eye Health, Antioxidant Support"},
          new Supplement { SupplementId = 3, Type = "Herb", Name = "Gymnema Sylvestre", Dosing = "According to Dr. Axe, a general recommended gymnema sylvestre dosage is a 100-milligram capsule, taken up to four times daily. It’s best to start with one capsule and gradually increase your dose, paying attention to any adverse effects.", Contraindications = "High doses taken long-term (over a 20-month period) may lead to: hypoglycemia, weakness, shakiness, excessive sweating, or muscular dystrophy. This should also not be taken alongside blood-sugar-lowering medications unless prescribed by your doctor.", Maladies = "Blood Sugar Support"},
          new Supplement { SupplementId = 4, Type = "Vitamin", Name = "Vitamin D", Dosing = "Dosing can range from 500IU to upwards of 25,000IU. This will depend on your current Vitamin D status. A doctor can order a blood test to find this out. Optimal Vitamin D levels in the body are 40-65 ng/mL.", Contraindications = "Research suggests that toxicity does not occur until you have reached above 80 ng/mL AND blood calcium levels increase. Vitamin D can be taken with any other vitamin or herb.", Maladies = "Bone Health, Immune System Support, Hormone Balance"},
          new Supplement { SupplementId = 5, Type = "Herb", Name = "Dandelion Root", Dosing = "European Commission and the British Herbal Pharmacopoeia recommend 2-8 grams of dandelion root daily safe. For fresh root extracts, 1-2 tablespoons daily. For dried extract, .75 to 1 gram daily.", Contraindications = "Dandelion can interact with certain drugs by affecting how the drug is absorbed into the bloodstream, metabolized by the liver, or cleared from the body via the kidneys. Consult your physician if you are currently taking prescription medications.", Maladies = "Detox Support, Liver Health"},
          new Supplement { SupplementId = 6, Type = "Herb", Name = "Bentonite Clay", Dosing = "Generally, 1/2 to 1 tsp per day is well tolerated. Always use products according to their instructions.", Contraindications = "Some bentonite clay products contain trace amounts of heavy metals and may not be suitable for pregnant women and children. Do not take in large quantities, this could cause harmful disruption of normal digestion and the absorption of nutrients.", Maladies = "Detox Support, Digestive Health"}
        );
    }
  }
}