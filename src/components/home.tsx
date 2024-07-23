const Home = () => {
  return (
    <section
      id="content"
      className="h-screen flex flex-col justify-center pt-25"
    >
      <h1 className="text-green text-md font-mono mb-8">Hi, my name is</h1>
      <div className="mb-4">
        <h2 className="big-heading font-extrabold mb-1 text-slate-lightest">
          Aditya Nath Suman.
        </h2>
        <h3 className="big-heading font-extrabold mt-3">
          I build things for the web.
        </h3>
      </div>
      <p className="text-xl max-w-lg mb-11 leading-tight">
        I'm a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I'm focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button className="font-mono text-xs w-fit text-green border-green border-1px rounded-1.5 px-8 py-4 fz-transition hover:fz-shadow hover:fz-translate">
        Get in touch
      </button>
    </section>
  );
};

export default Home;
