import React from 'react';
import Button from 'components/UI/Button/Button';

import styles from './styles.module.sass';
import { useTranslation } from 'next-i18next';

interface Props {
  linkToRegistrationPage: () => void;
}

const HomeHeader: React.FC<Props> = ({ linkToRegistrationPage }) => {
  const { t } = useTranslation('home-page');

  return (
    <div className={styles['home-header']} id='home-header'>
      <h2 className={styles['home-header__title']}>{t('HomeHeader.Title')}</h2>
      <h2 className={styles['home-header__subtitle']}>{t('HomeHeader.Subtitle')}</h2>
      <Button
        text={t('HomeHeader.Connect')}
        onClick={linkToRegistrationPage}
        to='/registration'
        className={styles['home-header__button']}
        color='yellow'
        size='large'
        square={true}
      />
    </div>
  );
};

export default HomeHeader;
