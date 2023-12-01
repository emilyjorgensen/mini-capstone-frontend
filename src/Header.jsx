export function Header() {
  return (
    <header>
      <nav className="bg-teal text-white py-8">
        <a href="#" className="hover:text-tan">
          Home
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-tan">
          Categories
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-tan">
          My Cart
        </a>
      </nav>
    </header>
  );
}
