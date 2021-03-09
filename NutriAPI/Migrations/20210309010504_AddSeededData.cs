using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class AddSeededData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[] { 5, "Dandelion can interact with certain drugs by affecting how the drug is absorbed into the bloodstream, metabolized by the liver, or cleared from the body via the kidneys. Consult your physician if you are currently taking prescription medications.", "European Commission and the British Herbal Pharmacopoeia recommend 2-8 grams of dandelion root daily safe. For fresh root extracts, 1-2 tablespoons daily. For dried extract, .75 to 1 gram daily.", "Detox Support, Liver Health", "Dandelion Root", "Herb" });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[] { 6, "Some bentonite clay products contain trace amounts of heavy metals and may not be suitable for pregnant women and children. Do not take in large quantities, this could cause harmful disruption of normal digestion and the absorption of nutrients.", "Generally, 1/2 to 1 tsp per day is well tolerated. Always use products according to their instructions.", "Detox Support, Digestive Health", "Bentonite Clay", "Herb" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 6);
        }
    }
}
