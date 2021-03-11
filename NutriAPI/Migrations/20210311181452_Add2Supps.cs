using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class Add2Supps : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[] { 10, "Lutein accumulates in the eyes and brain but does not seem to cause any harm in those who consume up to 40mg per day. Research seems to show a strong correlation between higher amounts of lutein in the brain and eyes with improved brain function and vision health. Lutein is typically sourced from marigold flowers, so those with ragweed allergies may be sensitive to consumption.", "No established dose. Generally doses range from 5mg-40mg.", "Eye Health, Brain Health", "Lutein", "Herb" });

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[] { 11, "The Upper Limit (UL) established for Vitamin C is 2,000mg per day, but higher doses have been used in acute cases as prescribed by a physician.", "Optimal daily intake is 2,000mg per day, but the minimum should be 250mg per day. For information about different types of Vitamin C supplements, visit the Linus Pauling Micronutrient Information Center found on the Resources page.", "Skin Health, Detox Support, Athletic Performance, Immune System Support", "Vitamin C", "Vitamin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 11);
        }
    }
}
