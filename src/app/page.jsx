import TaskView from "@/components/home/TaskView";
import {prisma} from '@/libs/prisma'


async function loadTasks() {
  const data =  await prisma.task.findMany()
  return data;
}

async function HomePage() {

  
  const tasks = await loadTasks();
  console.log(tasks);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          
            <TaskView task={task} key={task.id} />
          
        ))}
      </div>
    </section>
  );
}

export default HomePage;
