const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <picture>
        <source
          type="image/avif"
          srcSet={`
            ${src.replace(".jpg", ".avif")},
            ${src.replace(".jpg", "@2x.avif")},
            ${src.replace(".jpg", "@3x.avif")}
          `}
        />
        <source
          type="image/jpeg"
          srcSet={`
            ${src},
            ${src.replace(".jpg", "@2x.jpg")},
            ${src.replace(".jpg", "@3x.jpg")}
          `}
        />
        <img src={src} alt={alt} className="img-wrapper"></img>
      </picture>
      <ul className="tags-list">
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    </article>
  );
};

export default PhotoGridItem;
