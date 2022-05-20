import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import TopMenu from '../Shared/TopMenu/TopMenu';
import styles from './styles.module.sass';
import cn from 'classnames';
import DidoxLogoIcon from 'assets/images/didox-logo.svg';
import Image from 'next/image';
import Button from '../UI/Button/Button';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface INavItem {
  label: string;
  ref?: React.RefObject<HTMLElement>;
  to?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Header: FC = () => {
  const { t } = useTranslation('header');
  const [isLoginPage, setIsLoginPage] = React.useState<boolean>(false);
  const { pathname, locale, push, asPath } = useRouter();

  const headerNav: INavItem[] = [
    {
      label: t('Services'),
    },
    {
      label: t('Tariffs'),
      to: '/tariffs',
    },
    {
      label: t('Apps'),
    },
  ];

  useEffect(() => {
    setIsLoginPage(pathname.includes('login') || pathname.includes('registration'));
  }, [pathname]);

  return (
    <header className={cn(styles['header'])}>
      <div className={cn(styles['general-header'], styles['general-header--slick'])}>
        <div className={styles['general-header__container']}>
          <div className={styles['general-header__left']}>
            <div className={styles['general-header__logo']}>
              <Link href='/'>
                <Image width={128} height={33} src={DidoxLogoIcon} className={styles['general-header__logo--img']} alt='Didox Logotype' />
              </Link>
            </div>
            <TopMenu nav={headerNav} className={styles['general-header__nav']} />
          </div>
          <div className={styles['general-header__right']}>
            <a className={styles['general-header__support']} href='tel:998781484900'>
              (78) 148-49-00
            </a>
            <div className={cn(styles['general-header__lang'])} onClick={() => push(asPath, asPath, { locale: locale === 'ru' ? 'uz' : 'ru' })}>
              {t('secondLangLabel')}
            </div>
            {!isLoginPage && (
              <Button text={t('Enter')} to='/login_with_signature' color='yellow' square size='large' className={styles['general-header__login']} />
            )}
          </div>
        </div>
        {/* <div className='general-header__container container'>
				<div className='general-header__left'>
					<Link to='/' className='general-header__logo'>
						<img src={headerLogo} alt='' />
					</Link>
				</div>
				<div className='general-header__right'>
					<TopMenu nav={headerNav} className='general-header__nav' />
					<div className={cn('general-header__lang')}
						onClick={() => setLang(lang === 'ru' ? 'ru' : 'uz')}>
						{i18n.secondLangLabel}
					</div>
					{
						(!isLoginPage &&
							<Button
								text={i18n.Enter}
								onClick={linkToLoginPage}
								to='/login_with_signature'
								color='yellow'
								square
								size='large'
								className='general-header__login'
							/>)
						|| <Button
							text={i18n.Enter}
							onClick={submit}
							// to='/login_with_signature'
							color='yellow'
							square
							size='large'
							className='general-header__login'
						/>
					}
				</div>
			</div> */}
      </div>
    </header>
  );
};
