import "./Butttom.css";
export default function Buttom() {
  return (
    <>
      <div className="button">
        <div>
          <img
            className="buttonImage"
            src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"
            alt="Dna logo"
          />
          <div>
            <a href="">India</a>
            <a href="">World</a>
            <a href="">Business</a>
            <a href="">Technology</a>
            <a href="">Sports</a>
            <a href="">Cricket</a>
            <a href="">Entertainment</a>
          </div>
        </div>
        <hr />
        <div>
          <div>
            <p>Follow us on</p>
            <div>
              <img
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg"
                alt="Facebook"
              />
              <img
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg"
                alt="Twitter"
              />
              <img
                src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg"
                alt="youtube"
              />
            </div>
          </div>
          <div>
            <a href="">About dna</a>
            <a href="">Contact us</a>
            <a href="">Investor</a>
            <a href="">Advertise</a>
            <a href="">Privacy-Policies</a>
          </div>
        </div>
        <hr />
        <div>
          <p>Partner Site</p>
          <div>
            <a href="">Zee News</a>
            <a href="">Hindi news</a>
            <a href="">marathi news</a>
            <a href="">Bangali News</a>
            <a href="">Tamil news</a>
            <a href="">malayalam news</a>
            <a href="">zee Business</a>
          </div>
        </div>
      </div>
    </>
  );
}
