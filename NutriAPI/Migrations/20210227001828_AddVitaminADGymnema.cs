using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class AddVitaminADGymnema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Name", "Type" },
                values: new object[] { 2, "Preformed Vitamin A (as opposed to provitamin A as beta-carotene, which is water-soluble) is fat-soluble, which means that it can accumulate in the body and cause potential toxicity. If you are concerned about this, consult a physician about what dose is right for you.", "Consult this webpage to find your appropriate dosing: https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/. Keep in mind that Vitamin A is stored in the body long-term, and therefore accumulates. For optimal health, ", "Vitamin A", "Vitamin" });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Name", "Type" },
                values: new object[] { 3, "High doses taken long-term (over a 20-month period) may lead to: hypoglycemia, weakness, shakiness, excessive sweating, or muscular dystrophy. This should also not be taken alongside blood-sugar-lowering medications unless prescribed by your doctor.", "According to Dr. Axe, a general recommended gymnema sylvestre dosage is a 100-milligram capsule, taken up to four times daily. It’s best to start with one capsule and gradually increase your dose, paying attention to any adverse effects.", "Gymnema Sylvestre", "Herb" });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Name", "Type" },
                values: new object[] { 4, "Research suggests that toxicity does not occur until you have reached above 80 ng/mL AND blood calcium levels increase. Vitamin D can be taken with any other vitamin or herb. ", "Dosing can range from 500IU to upwards of 25,000IU. This will depend on your current Vitamin D status. A doctor can order a blood test to find this out. Optimal Vitamin D levels in the body are 40-65 ng/mL.", "Vitamin D", "Vitamin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 4);
        }
    }
}
