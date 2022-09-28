import "./Searchbar.css";

const Searchbar = () => {
  return (
    <>
      <div className="searchbar">
        <div>
          <img
            className="dna"
            src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
            alt="DnaLogo"
          />
          <button className="language">हिंदी में पढ़ें</button>
        </div>
        <img
          src="https://english.cdn.zeenews.com/static/public/menusearch.svg"
          alt="Search Logo"
        />
      </div>
    </>
  );
};
export default Searchbar;
