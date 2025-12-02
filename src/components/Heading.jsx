function Heading({ name, batch, func, onError }) {
  //   const { name, batch, func } = props;
  if (!name) {
    onError();
    return (
      <header className="bg-amber-500">
        <h1 className="text-3xl text-bold">Tidak Ada Nama</h1>
      </header>
    );
  }
  func(name);
  return (
    <>
      <header>
        <h1>
          Koda {batch} - {name}
        </h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <div>Spacing</div>
    </>
  );
}

export default Heading;
