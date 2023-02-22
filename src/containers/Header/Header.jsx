import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import './Header.css'

const Header = () => {
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  const [headerBanner, setHeaderBanner] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "headerBanner"]|order(orderRank){
      heading,
      subheading,
      buttonText,
      buttonLink,
      image,
      backgroundColour
    }`
      )
      .then((data) => setHeaderBanner(data))
      .catch(console.error);
  }, []);

  if (headerBanner) {
    var banner = headerBanner[0]
  } else {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <section className='wrapper header-wrapper' id='Header' style={{ backgroundColor: '#' + banner.backgroundColour }}>
      <div className="header-content">
        <img src={urlFor(banner.image)} alt={banner.title} className='header-image' />

        <div className="header-text">
          <h4 className="header-subheading">{banner.subheading}</h4>
          <h1 className="header-title">{banner.heading}</h1>

          <a href={banner.buttonLink} className="header-button secondary-button">
            {banner.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header