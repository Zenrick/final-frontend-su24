function SingleTaskView({task}) {
    if (!task) {
        return (
          <section>
            <h2>Task not found!</h2>
          </section>
        );
      }
    
      return (
        <section>
          <article className="task">
            <h2>{task.title}</h2>
            <p className="task-title">{task.title}</p>
          </article>
        </section>
      );
}

export default SingleTaskView;