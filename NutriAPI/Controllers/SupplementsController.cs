using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NutriAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NutriAPI.Controllers
{
  [ApiVersion("1.0")]
  [Route("api/supplements")]
  [ApiController]
  public class SupplementsV1Controller : ControllerBase
  {
    private NutriAPIContext _db;

    public SupplementsV1Controller(NutriAPIContext db)
    {
      _db = db;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Supplement>> Get(string type, string name, string dosing, string contraindications)
    {
      var query = _db.Supplements.AsQueryable();
      if (type != null)
      {
        query = query.Where(entry => entry.Type == type);
      }
      if (name != null)
      {
        query = query.Where(entry => entry.Name == name);
      }
      if (dosing != null)
      {
        query = query.Where(entry => entry.Dosing == dosing);
      }
      if (contraindications != null)
      {
        query = query.Where(entry => entry.Contraindications == contraindications);
      }
      return query.ToList();
    }
  }
}