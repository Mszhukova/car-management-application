using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace new_project.Controllers
{
    [Produces("application/json")]
    [Route("api/ToDo")]
    public class ToDoController : Controller
    {
        private static ConcurrentBag<Todo> todos = new ConcurrentBag<Todo> {
        new Todo { Id = Guid.NewGuid(), Description = "Learn Vue" }
    };

  
        [HttpGet()]
        public JsonResult GetSelectedCar()
        {
            
            return Json("Lada");
        }
        [HttpPost()]
        public Todo AddTodo([FromBody]Todo todo)
        {
            todo.Id = Guid.NewGuid();
            todo.Done = false;
            todos.Add(todo);
            return todo;
        }

        [HttpDelete("{id}")]
        public ActionResult CompleteTodo(Guid id)
        {
            var todo = todos.SingleOrDefault(t => t.Id == id);
            if (todo == null) return NotFound();

            todo.Done = true;
            return StatusCode(204);
        }
    }
    public class Todo
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public bool Done { get; set; }
    }
}