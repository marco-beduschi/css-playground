import PhotoGridItem from "../PhotoGridItem";

const MainContent = ({ data }) => {
  return (
    <main>
      <section className="hero-banner">
        <img
          src="/images/hero-img.jpg"
          alt="Banner depicting a cat staring at the camera"
        ></img>
        <img src="/swoop.svg" alt=""></img>
      </section>
      <div className="container">
        <h2 className="sr-only">All photos</h2>
        <div className="photos-list">
          {data.map(({ id, src, alt, tags }) => {
            return (
              <PhotoGridItem key={id} id={id} src={src} alt={alt} tags={tags} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
