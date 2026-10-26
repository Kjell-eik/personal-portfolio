import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Link, Social } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import CloseIcon from '@/components/svgs/close';
import MenuIcon from '@/components/svgs/menu';
import HeaderLink from './HeaderLink';

export default function Header(props) {
    const { isSticky, styles = {}, ...rest } = props;
    const headerWidth = styles.self?.width ?? 'narrow';
    return (
        <header className={classNames(isSticky ? 'sticky top-0 z-50' : 'relative z-50', 'border-b border-current')}>
            <div
                className={classNames({
                    'max-w-7xl mx-auto xl:border-x xl:border-current': headerWidth === 'narrow',
                    'max-w-8xl mx-auto 2xl:border-x 2xl:border-current': headerWidth === 'wide',
                    'w-full': headerWidth === 'full'
                })}
            >
                <Link href="#main" className="sr-only">
                    Hopp til hovedinnhold
                </Link>
                <HeaderVariants {...rest} />
            </div>
        </header>
    );
}

function HeaderVariants(props) {
    const { headerVariant = 'variant-a', ...rest } = props;
    switch (headerVariant) {
        case 'variant-b':
            return <HeaderVariantB {...rest} />;
        case 'variant-c':
            return <HeaderVariantC {...rest} />;
        default:
            return <HeaderVariantA {...rest} />;
    }
}

function HeaderVariantA(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden border-r border-current divide-x divide-current md:flex">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current md:flex">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantB(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {primaryLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current divide-x divide-current md:flex">
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {socialLinks.length > 0 && (
                <ul
                    className={classNames('hidden border-l border-current md:flex', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function HeaderVariantC(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    return (
        <div className="relative flex items-stretch">
            <SiteLogoLink {...logoProps} />
            {socialLinks.length > 0 && (
                <ul className="hidden ml-auto border-l border-current md:flex">
                    <ListOfSocialLinks links={socialLinks} inMobileMenu={false} />
                </ul>
            )}
            {primaryLinks.length > 0 && (
                <ul
                    className={classNames('hidden border-l border-current divide-x divide-current md:flex', {
                        'ml-auto': primaryLinks.length === 0
                    })}
                >
                    <ListOfLinks links={primaryLinks} inMobileMenu={false} />
                </ul>
            )}
            {(primaryLinks.length > 0 || socialLinks.length > 0) && <MobileMenu {...props} />}
        </div>
    );
}

function MobileMenu(props) {
    const { primaryLinks = [], socialLinks = [], ...logoProps } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const menuRef = useRef<HTMLDivElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    function closeMenu() {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
    }

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            setIsMenuOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router.events]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            closeButtonRef.current?.focus();
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const menuContent = isMenuOpen && (
        <div
            ref={menuRef}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#171b10]/98 text-white backdrop-blur-xl"
            style={{
                WebkitOverflowScrolling: 'touch'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Hovedmeny"
            onKeyDown={(event) => {
                if (event.key === 'Escape') {
                    closeMenu();
                    return;
                }

                if (event.key === 'Tab') {
                    const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'
                    );
                    if (!focusableElements?.length) return;

                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    if (event.shiftKey && document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    } else if (!event.shiftKey && document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            }}
        >
            <div className="flex flex-col min-h-screen">
                <div className="flex items-stretch justify-between border-b border-current">
                    <SiteLogoLink {...logoProps} />
                    <div className="border-l border-current">
                        <button
                            ref={closeButtonRef}
                            aria-label="Lukk meny"
                            className="flex min-h-11 min-w-11 items-center justify-center p-3 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#d8bb85]"
                            onClick={closeMenu}
                            type="button"
                        >
                            <CloseIcon className="fill-current w-icon h-icon" />
                        </button>
                    </div>
                </div>
                {(primaryLinks.length > 0 || socialLinks.length > 0) && (
                    <div className="flex flex-col items-stretch justify-start px-4 pt-8 pb-10 space-y-8 grow flex-1">
                        {primaryLinks.length > 0 && (
                            <nav className="mx-auto w-full max-w-sm" aria-label="Hovedmeny">
                                <ul className="space-y-2">
                                    <ListOfLinks links={primaryLinks} inMobileMenu={true} />
                                </ul>
                            </nav>
                        )}
                        {socialLinks.length > 0 && (
                            <ul className="mx-auto inline-flex w-fit flex-nowrap border border-current divide-x divide-current">
                                <ListOfSocialLinks links={socialLinks} inMobileMenu={true} />
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className="ml-auto md:hidden">
                <button
                    ref={menuButtonRef}
                    aria-label="Åpne meny"
                    aria-expanded={isMenuOpen}
                    aria-haspopup="dialog"
                    className="flex min-h-11 min-w-11 items-center justify-center border-l border-current p-3 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#d8bb85]"
                    onClick={() => setIsMenuOpen(true)}
                    type="button"
                >
                    <MenuIcon className="fill-current w-icon h-icon" />
                </button>
            </div>
            {mounted && typeof document !== 'undefined' && menuContent && createPortal(menuContent, document.body)}
        </>
    );
}

function SiteLogoLink({ title, isTitleVisible, logo }) {
    if (!(logo || (title && isTitleVisible))) {
        return null;
    }
    return (
        <div className="flex items-center border-r border-current">
            <Link href="/" className="flex items-center h-full gap-2 p-4 link-fill">
                {logo && <ImageBlock {...logo} className="max-h-12" />}
                {title && isTitleVisible && <span className="text-base tracking-widest uppercase">{title}</span>}
            </Link>
        </div>
    );
}

function ListOfLinks({ links, inMobileMenu }) {
    const router = useRouter();
    const currentPath = router.asPath.split(/[?#]/)[0].replace(/\/+$/, '') || '/';

    return links.map((link, index) => {
        const linkPath = typeof link.url === 'string' ? link.url.split(/[?#]/)[0].replace(/\/+$/, '') || '/' : '';
        const isCurrent =
            !!linkPath && (currentPath === linkPath || (linkPath !== '/' && currentPath.startsWith(`${linkPath}/`)));

        return (
            <li key={index} className={classNames(inMobileMenu ? 'w-full' : 'inline-flex items-stretch')}>
                <HeaderLink
                    {...link}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={classNames(
                        inMobileMenu
                            ? classNames(
                                  'flex min-h-12 w-full items-center justify-center px-6 text-lg text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bb85]',
                                  isCurrent
                                      ? 'border-l-2 border-[#d8bb85] bg-white/10 text-[#f0d69f]'
                                      : 'hover:bg-white/10'
                              )
                            : classNames(
                                  'p-4 link-fill',
                                  isCurrent && 'text-[#f0d69f] underline decoration-2 underline-offset-8'
                              )
                    )}
                />
            </li>
        );
    });
}

function ListOfSocialLinks({ links, inMobileMenu = false }) {
    return links.map((link, index) => (
        <li key={index} className={classNames('inline-flex items-stretch', inMobileMenu && 'box-content h-16 w-16')}>
            <Social
                {...link}
                className={classNames('text-lg link-fill', inMobileMenu ? 'h-16 w-16' : 'p-4')}
            />
        </li>
    ));
}
