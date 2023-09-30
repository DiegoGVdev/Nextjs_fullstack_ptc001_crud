"use client";

import { useRouter } from "next/navigation";
function NewPage() {


  const router = useRouter();

  const onSubmit = async  (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({title, description}),
      headers:{
        "content-type":"application/json"
      }
    })

    const data = await res.json()
    router.push("/")

    

  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 md:w-1/4" onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de la tarea
        </label>

        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full rounded text-black"
          placeholder="Titulo"
        />

        <label htmlFor="description" className="font-bold text-sm">
          Descripcion
        </label>

        <textarea
          id="description"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full rounded text-black"
          placeholder="Describe tu tarea"
        >


        </textarea>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white 
      font-bold py-2 px-4 rounded "
        >
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
