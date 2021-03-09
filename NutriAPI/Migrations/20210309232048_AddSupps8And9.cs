using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class AddSupps8And9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 5,
                column: "Contraindications",
                value: "Dandelion can interact with certain drugs by affecting how the drug is absorbed into the bloodstream, metabolized by the liver, or cleared from the body via the kidneys. Consult your physician before use if you are currently taking prescription medications.");

            migrationBuilder.InsertData(
                table: "Supplements",
                columns: new[] { "SupplementId", "Contraindications", "Dosing", "Maladies", "Name", "Type" },
                values: new object[,]
                {
                    { 7, "Consult your physician before use if you have a diagnosed digestive issue such as IBS, IBD, Crohns Disease, etc.", "No established dose. Use as directed on the supplement bottle. Generally taken before each meal to stimulate digestion.", "Digestive Health", "Bitters", "Herb" },
                    { 8, "None established.", "No established dose. Use as directed on the supplement bottle. It's important to note that the body produces HMB naturally, but additional supplementation may benefit body-building efforts.", "Sports Nutrition", "Hydroxymethylbutyrate (HMB)", "Miscellanous Nutrient" },
                    { 9, "Consult your physician before use if you are currently on any blood pressure medications.", "No established dose. Use as directed on the supplement bottle. It's important to note that the body produces HMB naturally, but additional supplementation may benefit body-building efforts.", "Sports Nutrition, Heart Health", "Beet Root Powder", "Herb" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 9);

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 5,
                column: "Contraindications",
                value: "Dandelion can interact with certain drugs by affecting how the drug is absorbed into the bloodstream, metabolized by the liver, or cleared from the body via the kidneys. Consult your physician if you are currently taking prescription medications.");
        }
    }
}
