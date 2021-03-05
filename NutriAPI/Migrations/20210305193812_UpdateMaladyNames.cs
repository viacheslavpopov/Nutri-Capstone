using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class UpdateMaladyNames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 1,
                column: "Maladies",
                value: "Liver Health, Skin Health, Blood Sugar Support, Detox Support");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 2,
                column: "Maladies",
                value: "Skin Health, Immune System Support, Eye Health, Antioxidant Support");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 3,
                column: "Maladies",
                value: "Blood Sugar Support");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 4,
                column: "Maladies",
                value: "Bone Health, Immune System Support, Hormone Balance");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 1,
                column: "Maladies",
                value: "Liver Health, Skin, Blood Sugar, Detox");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 2,
                column: "Maladies",
                value: "Skin, Immune System, Eye Health, Antioxidant");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 3,
                column: "Maladies",
                value: "Blood Sugar");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 4,
                column: "Maladies",
                value: "Bone Health, Immune System, Hormone Balance");
        }
    }
}
