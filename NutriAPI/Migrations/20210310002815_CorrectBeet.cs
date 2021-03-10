using Microsoft.EntityFrameworkCore.Migrations;

namespace NutriAPI.Migrations
{
    public partial class CorrectBeet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 9,
                column: "Dosing",
                value: "No established dose. Use as directed on the supplement bottle.");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Supplements",
                keyColumn: "SupplementId",
                keyValue: 9,
                column: "Dosing",
                value: "No established dose. Use as directed on the supplement bottle. It's important to note that the body produces HMB naturally, but additional supplementation may benefit body-building efforts.");
        }
    }
}
