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

    [HttpPost]
    public void Post([FromBody] Supplement supplement)
    {
      _db.Supplements.Add(supplement);
      _db.SaveChanges();
    }

    [HttpGet("{id}")]
    public ActionResult<Supplement> Get(int id)
    {
      return _db.Supplements.FirstOrDefault(entry => entry.SupplementId == id);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Supplement supplement)
    {
      supplement.supplementId = id;
      _db.Entry(supplement).State = EntityState.Modified;
      _db.SaveChanges();
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var supplementToDelete = _db.Supplements.FirstOrDefault(entry => entry.SupplementID == id);
      _db.Supplements.Remove(supplementToDelete);
      _db.SaveChanges();
    }
  }
}