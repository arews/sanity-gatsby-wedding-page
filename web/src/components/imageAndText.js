import {format, distanceInWords, differenceInDays} from 'date-fns';
import React from 'react';
import {Link} from 'gatsby';
import {buildImageObj} from '../lib/helpers';
import {imageUrlFor} from '../lib/image-url';
import BlockContent from './block-content';
import Container from './container';
import RoleList from './role-list';

import styles from './imageAndText.module.css';

function ImageAndText (props) {
  const {_rawBody, title, mainImage, members, publishedAt} = props
  return (
    <article className={styles.root}>
      {props.mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{title}</h1>
            {_rawBody && <BlockContent blocks={_rawBody || []} />}
          </div>
          <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do YYYY')}
              </div>
            )}
            {members && members.length > 0 && <RoleList items={members} title='Project members' />}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default ImageAndText
