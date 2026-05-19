import { Link, useLocation, useNavigate } from 'react-router-dom';

type LinkSpec = { label: string; href: string };

const homeLinks: LinkSpec[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '#contact' },
];

const detailLinks: LinkSpec[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/#work' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

/**
 * Slim sticky-bottom nav, shown only ≤720px (CSS-driven via `.mobile-dock`).
 * The main `.nav` top bar collapses its links below 720px; this picks them up.
 */
export function MobileDock() {
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';
  const links = onHome ? homeLinks : detailLinks;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && onHome) {
      e.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
      e.preventDefault();
      navigate('/', { state: { scrollTo: href.slice(2) } });
    }
  };

  return (
    <nav className="mobile-dock" data-print-hide aria-label="Mobile section nav">
      <ul>
        {links.map((l) =>
          l.href.startsWith('/') && !l.href.startsWith('/#') ? (
            <li key={l.href}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ) : (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
