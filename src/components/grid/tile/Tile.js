import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'
import InstagramLink from '../../shared/instagramLink/InstagramLink'
import Image from '../../shared/image/Image'
import style from './Tile.scss'

export default function Tile ({bike}) {
  const hasImage = bike.get('images').first()

  return (
    <div className={style.tile}>
      <Link to={`/bike/${bike.get('_id')}`}>
        <div className={style.image}>
          {
            hasImage &&
            <Image
              url={hasImage.get('url')}
              className={style.picture}
              resize={true}
              width="500"
              caption={bike.get('title')} />
          }

        </div>
        <h2 className={bike.title}>
          {bike.get('title')}
        </h2>
      </Link>
      <InstagramLink handle={bike.get('instagram')} />
    </div>
  )
}

Tile.propTypes = {
  bike: PropTypes.instanceOf(Map).isRequired
}
