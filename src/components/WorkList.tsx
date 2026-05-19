import { Link } from 'react-router-dom';
import type { Project } from '../types';

/**
 * Editorial work-list rows. Hover ramps padding-left, fades in the View → arrow,
 * and shifts title color via .work-item CSS in index.css. No floating preview.
 */
export function WorkList({ projects }: { projects: Project[] }) {
  return (
    <div className="work-wrap">
      <div className="work-list">
        {projects.map((p, i) => (
          <Link key={p.id} to={`/project/${p.id}`} className="work-item">
            <div className="num">{p.n ?? String(i + 1).padStart(2, '0')}</div>
            <div className="title-cell">
              {p.title}
              {p.variant && <em> — {p.variant}</em>}
            </div>
            <div className="tag">{p.tag ?? p.type}</div>
            <div className="year">{p.year ?? ''}</div>
            <div className="arrow">View →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
