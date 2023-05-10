import { Link } from 'react-router-dom';

type SocialItemProps = {
  label: string;
  icon: string;
}

const SocialItem = ({ label, icon }: SocialItemProps) => (
  <li className="socials__item">
    <Link className="socials__link" to="#" aria-label={label} target="_blank" rel="nofollow noopener noreferrer">
      <svg className="socials__icon socials__icon--default" width="28" height="28" aria-hidden="true">
        <use xlinkHref={`#icon-${icon}-default`}>
        </use>
      </svg>
      <svg className="socials__icon socials__icon--interactive" width="28" height="28" aria-hidden="true">
        <use xlinkHref={`#icon-${icon}-interactive`}>
        </use>
      </svg>
    </Link>
  </li >
);

export default SocialItem;
