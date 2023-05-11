import { Quest } from '../../types/quests';

type DecorProps = {
  img?: Quest | null;
}

const Decor = ({ img }: DecorProps) => (
  <div className="decorated-page__decor" aria-hidden="true">
    <picture>
      <source type="image/webp" srcSet={`${img?.coverImg}, ${img?.coverImgWebp}`} />
      <img src={img?.previewImg} srcSet={img?.coverImg} width="1366" height="1959" alt="" />
    </picture>
  </div>
);

export default Decor;
