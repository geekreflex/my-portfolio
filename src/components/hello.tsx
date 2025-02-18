import React from 'react';
import styles from '@/styles/Home.module.css';
import { data } from 'portfolio.config';

const Hello = () => {
  return (
    <div className={styles.hello}>
      <h1 className={styles.hello_heading}>
        Let&apos;s work <br /> <span>together!</span>
      </h1>
      <p className={styles.hello_text}>
        I&apos;d love to hear from you and always welcome any feedback - please
        don&apos;t hesitate to get in touch!
      </p>

      <div className={styles.hello_action}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="208.509"
          height="211.728"
          viewBox="0 0 208.509 211.728"
        >
          <g
            id="Component_11_1"
            data-name="Component 11 – 1"
            transform="translate(66.001) rotate(48)"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M934.024,560.6c42.82-23.775,107.986-30.281,128-27.076,10.483,1.678,21.434,4.591,28.778,12.3s9.174,21.56,1.239,28.654a10.848,10.848,0,0,1-7.737,3.016c-5.165-.345-8.932-5.644-9.28-10.842s1.89-10.2,4.383-14.764a115.672,115.672,0,0,1,59.652-52.168"
              transform="translate(-934.024 -492.302)"
              fill="none"
              stroke="#3c3c43eb"
              stroke-miterlimit="10"
              strokeWidth="5"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M1105.938,492.3c7.488,2.9,12.588,3.643,20.076,6.54a1.373,1.373,0,0,1,1.02,2.05l-4.9,17.344"
              transform="translate(-919.28 -492.302)"
              fill="none"
              stroke="#3c3c43eb"
              stroke-miterlimit="10"
              strokeWidth="5"
            />
          </g>
        </svg>
        <a href={`mailto:${data.email}`}>Let&apos;s Level Up!</a>
      </div>
    </div>
  );
};

export default Hello;
