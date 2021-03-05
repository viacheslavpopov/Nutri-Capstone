using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Supplements",
                columns: table => new
                {
                    SupplementId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Dosing = table.Column<string>(nullable: false),
                    Contraindications = table.Column<string>(nullable: false),
                    Maladies = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Supplements", x => x.SupplementId);
                });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[,]
                {
                    { 1, "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction.", "According to research, the therapeutic threshold may be around 225mg per day.", "Liver Health, Skin, Blood Sugar, Detox", "Milk Thistle", "Herb" },
                    { 2, "Preformed Vitamin A (as opposed to provitamin A as beta-carotene, which is water-soluble) is fat-soluble, which means that it can accumulate in the body and cause potential toxicity. If you are concerned about this, consult a physician about what dose is right for you.", "Consult this webpage to find your appropriate dosing: https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/. Keep in mind that Vitamin A is stored in the body long-term, and therefore accumulates. For optimal health, ", "Skin, Immune System, Eye Health, Antioxidant", "Vitamin A", "Vitamin" },
                    { 3, "High doses taken long-term (over a 20-month period) may lead to: hypoglycemia, weakness, shakiness, excessive sweating, or muscular dystrophy. This should also not be taken alongside blood-sugar-lowering medications unless prescribed by your doctor.", "According to Dr. Axe, a general recommended gymnema sylvestre dosage is a 100-milligram capsule, taken up to four times daily. It’s best to start with one capsule and gradually increase your dose, paying attention to any adverse effects.", "Blood Sugar", "Gymnema Sylvestre", "Herb" },
                    { 4, "Research suggests that toxicity does not occur until you have reached above 80 ng/mL AND blood calcium levels increase. Vitamin D can be taken with any other vitamin or herb.", "Dosing can range from 500IU to upwards of 25,000IU. This will depend on your current Vitamin D status. A doctor can order a blood test to find this out. Optimal Vitamin D levels in the body are 40-65 ng/mL.", "Bone Health, Immune System, Hormone Balance", "Vitamin D", "Vitamin" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Supplements");
        }
    }
}
