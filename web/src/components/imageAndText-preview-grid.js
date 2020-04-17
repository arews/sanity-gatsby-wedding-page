import React from 'react';
import ProjectPreview from './imageAndText-preview';

import styles from './imageAndText-preview-grid.module.css';

function ProjectPreviewGrid (props) {
  return (
    <div className={styles.root}>
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
