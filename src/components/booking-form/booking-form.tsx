import { SubmitHandler, useForm } from 'react-hook-form';
import BookingFormDate from '../booking-form-date/booking-form-date';
import { Place } from '../../store/bookinng-process/types';
import { bookingApi } from '../../store/bookinng-process/booking-api';

export type BookingFormType = {
  name: string;
  tel: number;
  person: number;
  children: boolean;
}

export type BookingFormProps = {
  place: Place | null;
}

const BookingForm = ({ place }: BookingFormProps) => {
  const [addBooking] = bookingApi.useAddItemMutation();

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<BookingFormType>({
    defaultValues: { children: true },
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<BookingFormType> = (data) => {
    //TODO диспатчить инфу о пользователе для получения ее в забронированных квестах
    addBooking({
      // TODO добавить корректные данные из форм
      date: {
        today: '',
        tomorrow: '',
      },
      time: 'string',
      contactPerson: 'string',
      phone: 'string',
      withChildren: false,
      peopleCount: 10,
      placeId: '1',
    });
    reset();
  };

  return (
    <form className="booking-form" onSubmit={() => handleSubmit(onSubmit)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <BookingFormDate placeTime={place?.slots.today} />
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <BookingFormDate placeTime={place?.slots.tomorrow} />
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя"
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 1,
                message: 'Имя должно содержать не менее 1 символа'
              },
              maxLength: {
                value: 15,
                message: 'Имя должно содержать не более 15 символов'
              }
            })}
          />
          <div> {errors?.name && <p>{errors?.name?.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон"
            {...register('tel', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: 'Пожалуйста введите допустимый формат номера телефона (к примеру +7(000)000-00-00 (Ру-формат))'
              }
            })}
          />
          <div> {errors?.tel && <p>{errors?.tel.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников" required
            {...register('person', {
              required: 'Поле обязательно к заполнению',
              min: {
                value: 1,
                message: 'Пожалуйста укажите большее количество участников, в данном квесте могут учатствовать от {} человек'
              },
              max: {
                value: 10,
                message: 'Пожалуйста укажите меньшее количество участников, в данном квесте могут учатствовать до {} человек'
              }
            })}
          />
          <div> {errors?.person && <p>{errors?.person.message}</p>}</div>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('children')} />
          <span className="custom-checkbox__icon">
            <svg width="20" height="17" aria-hidden="true">
              <use xlinkHref="#icon-tick"></use>
            </svg>
          </span>
          <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
        </label>
      </fieldset>
      <button className="btn btn--accent btn--cta booking-form__submit" type="submit" disabled={!isValid}>Забронировать</button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
        <span className="custom-checkbox__icon">
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональных данных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form >
  );
};
export default BookingForm;
