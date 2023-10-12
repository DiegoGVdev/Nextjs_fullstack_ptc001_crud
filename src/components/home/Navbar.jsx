import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-500">
      <div className="container flex justify-between  items-center mx-auto p-4 ">
        <Link href="/">
          <h3 className="font-bold text-3xl">NextCRUD</h3>
        </Link>

        <ul className="flex ">
          <li className="px-3 hover:bg-slate-800">
            <Link href="/new">New</Link>
          </li>

          <li className="px-3 hover:bg-slate-800">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
