import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string | null;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Minecraft Players',
    icon: 'https://img.zaralx.ru/v1/minecraft/user/face/full/_zaralX_',
    description: (
      <>
        Can be added soon!
      </>
    ),
  },
  {
    title: 'Minecraft Icons',
    icon: 'https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/bricks/icon',
    description: (
      <>
        Easy way to add minecraft icons on your website.
      </>
    ),
  },
  {
    title: 'Minecraft Language',
    icon: 'https://img.icons8.com/?size=96&id=ZotB97eAru3O&format=png',
    description: (
      <>
        Get name of any item, and language json in one request!
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <img className="index-icon" src={icon} alt=""/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
