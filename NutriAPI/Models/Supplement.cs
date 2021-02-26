using System.ComponentModel.DataAnnotations;

namespace NutriAPI.Models
{
  public class Supplement
  {
    public int SupplementId { get; set; }
    [Required]
    public string Type { get; set; } // herb or vitamin?
    [Required]
    public string Name { get; set; }
    [Required]
    public string Dosing { get; set; }
    [Required]
    public string Contraindications { get; set; }
  }
}