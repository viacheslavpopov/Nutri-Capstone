using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nutree.Models;
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
  }
}