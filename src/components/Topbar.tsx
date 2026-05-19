import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { MobileDock } from './MobileDock';
import { useClock } from '../lib/hooks';
import { profile } from '../data/profile';

type LinkSpec = { label: string; href: string };

const homeLinks: LinkSpec[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '#contact' },
];

const detailLinks: LinkSpec[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Résumé', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
];

export function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const time = useClock(profile.timezone);
  const onHome = location.pathname === '/';
  const links = onHome ? homeLinks : detailLinks;

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && onHome) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <>
    <nav className="nav" data-print-hide>
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="Home">
          <span className="dot" />
          {profile.firstName} <em>{profile.lastName}</em>
        </Link>

        <div className="nav-links">
          {links.map((l) =>
            l.href.startsWith('/') && !l.href.startsWith('/#') ? (
              <Link key={l.href} to={l.href}>
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={(e) => handleAnchor(e, l.href)}>
                {l.label}
              </a>
            ),
          )}
        </div>

        <div className="nav-aside">
          <span className="pulse" />
          <span className="hide-sm">{profile.availability}</span>
          <span className="hide-sm" style={{ opacity: 0.45 }}>
            ·
          </span>
          <span>
            {profile.cityShort} {time}
          </span>
          <ThemeToggle />
        </div>
      </div>
    </nav>
    <MobileDock />
    </>
  );
}
