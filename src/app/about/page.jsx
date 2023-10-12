function AboutPage() {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-2xl p-4 ">Acerca de esta app</h1>
        <p className="text-justify p-4 ">
          Esto es un ejercicio realizado a modo de práctica para comprender
          todas las herramientas que Next.js nos ofrece a la hora de diseñar
          nuestras aplicaciones. Estos son los temas que se pueden abordar en
          esta aplicación
        </p>
      </div>

      <ol className="p-4 mx-4 flex flex-col justify-center items-center list-disc">
        <li>Component Server</li>
        <li>Client Server</li>
        <li>ORM Prisma</li>
        <li>Backent con Nextjs</li>
        <li>Tailwind css</li>
        <li>params and useParams</li>
        <li>useRouter</li>
        <li>React Form</li>
        <li>React components </li>
      </ol>
    </section>
  );
}

export default AboutPage;
