import { useLocation } from 'react-router-dom';
import { Quest } from '../../types/quests';

export type DecorProps = {
  img?: Quest | null;
}

const DecorInner = () => {
  const location = useLocation();

  const locationPathName = location.pathname;

  return (
    locationPathName === '/login' ? (
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type='image/webp' srcSet='img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x' />
          <img src='img/content/maniac/maniac-size-m.jpg' srcSet='img/content/maniac/maniac-size-m@2x.jpg 2x' width="1366" height="768" alt="" />
        </picture>
      </div>
    ) : (
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp" srcSet='img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x' />
          <img src='img/content/maniac/maniac-bg-size-m.jpg' srcSet='img/content/maniac/maniac-bg-size-m@2x.jpg 2x' width="1366" height="1959" alt="" />
        </picture>
      </div>
    )
  );
};

const Decor = ({ img }: DecorProps) => (
  img
    ? (
      <div className="decorated-page__decor" aria-hidden="true">
        <picture> <source type="image/webp" srcSet={`${img?.coverImg}, ${img?.coverImgWebp}`} />
          <img src={img?.previewImg} srcSet={img?.coverImg} width="1366" height="1959" alt="" />
        </picture>
      </div>
    ) : <DecorInner />
);

export default Decor;


