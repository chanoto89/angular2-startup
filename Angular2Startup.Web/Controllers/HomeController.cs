using System.Web.Mvc;

namespace Angular2Startup.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}