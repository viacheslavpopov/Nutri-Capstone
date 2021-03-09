using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class CorrectSportsNutrition : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 8,
                column: "Maladies",
                value: "Athletic Performance");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 9,
                column: "Maladies",
                value: "Athletic Performance, Heart Health");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 8,
                column: "Maladies",
                value: "Sports Nutrition");

            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 9,
                column: "Maladies",
                value: "Sports Nutrition, Heart Health");
        }
    }
}
