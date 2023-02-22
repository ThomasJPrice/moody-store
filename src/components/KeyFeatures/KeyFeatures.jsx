import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
import imageUrlBuilder from '@sanity/image-url'
import './KeyFeatures.css'

const KeyFeatures = () => {
  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }

  const [keyFeatures, setKeyFeatures] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "keyFeatures"]|order(orderRank){
      title,
      icon,
    }`
      )
      .then((data) => setKeyFeatures(data))
      .catch(console.error);
  }, []);

  return (
    <div className='key-wrapper wrapper'>
      <div className="key-container container">
        <ul className="key-features">
          {keyFeatures ?
            keyFeatures.map((feature, index) => (
              <li key={index + feature} className='key-feature'>
                <img src={urlFor(feature.icon)} alt={feature.title} className='key-image' />
                {feature.title}
              </li>
            ))
            : ''}
        </ul>
      </div>
    </div>
  )
}

export default KeyFeatures