import { SubmitHandler, useForm } from 'react-hook-form';
import BookingFormDate from '../booking-form-date/booking-form-date';
import { Place } from '../../store/bookinng-process/types';
import { BookingInformation, bookingApi } from '../../store/bookinng-process/booking-api';
import { useParams } from 'react-router-dom';
import { questApi } from '../../store/question-process/api-action';
import { Quest } from '../../types/quests';
import { reservationApi } from '../../store/reservation-process/api';

export type BookingFormType = {
  date?: {
    today: string;
    tomorrow: string;
  };
  contactPerson: string;
  phone: string;
  peopleCount: string;
  withChildren: boolean;
}

export type BookingFormProps = {
  quest: Quest | undefined;
  bookingData: BookingInformation[] | undefined;
}

const BookingForm = ({ quest, bookingData }: BookingFormProps) => {
  const { id } = useParams();

  const questId = id;
  const { data: bookingItem } = bookingApi.useGetByIdQuery(id);
  //TODO const [addBooking] = bookingApi.useAddItemMutation();
  //Нужно сообразить, что делать?
  //По идее заполенные поля должны отправляться в мои брони, т.к. после успешной бюрони перекидвает на страницу мои брони
  const [addBooking] = reservationApi.useAddItemMutation();

  const minPerson = String(quest?.peopleMinMax[0]);
  const maxPerson = String(quest?.peopleMinMax[1]);

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<BookingFormType>({
    defaultValues: { withChildren: true },
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<BookingFormType> = (data) => {
    const bookingInformation = {
      contactPerson: data.contactPerson,
      phone: data.phone,
      withChildren: data.withChildren,
      peopleCount: data.peopleCount,
      placeId: id,
    };
    console.log(bookingInformation);
    //TODO Отправляем информацию чтобы забрать ее в quest-card, которые будут отрисовываться в Мои бронирования
    addBooking(bookingInformation);
    reset();
  };

  return (
    <form className="booking-form" onSubmit={() => handleSubmit(onSubmit)}>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div className="booking-form__date-inner-wrapper">
            <label className="custom-radio booking-form__date">
              {/* {bookingItem?.slots.today.map((time) => (
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today9h45m" name="date" required value="today9h45m" disabled key={time?.time}
                    {...register('today'), {
                      value: true,
                      message: `${time.time}`
                    }}
                  /><span className="custom-radio__label">{time.time}</span>
                </label>
              ))} */}
              {/* TODO как передать флаг  isAvailable? Нужно применить onCgange в инпуте?
              По идее я получаю ответ от формы today:'время', но кроме времени нужно получать флаг */}
            </label>
          </div>
          {/* <BookingFormDate placeTime={bookingData?.slots.today} /> */}
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div className="booking-form__date-inner-wrapper">
            <label className="custom-radio booking-form__date">
              {/* {bookingItem?.slots.tomorrow.map((time) => (
                <label className="custom-radio booking-form__date">
                  <input type="radio" id="today9h45m" name="date" required value="today9h45m" disabled key={time?.time}
                    {...register('tomorrow'), {
                      value: true,
                      message: `${time.time}`,
                    }}
                  /><span className="custom-radio__label">{time.time}</span>
                </label>
              ))} */}
            </label>
          </div>
          {/* <BookingFormDate placeTime={bookingData?.slots.tomorrow} /> */}
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">Ваше имя</label>
          <input type="text" id="name" placeholder="Имя"
            {...register('contactPerson', {
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
          <div> {errors?.contactPerson && <p>{errors?.contactPerson?.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
          <input type="tel" id="tel" placeholder="Телефон"
            {...register('phone', {
              required: 'Поле обязательно к заполнению',
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: 'Пожалуйста введите допустимый формат номера телефона (к примеру +7(000)000-00-00 (Ру-формат))'
              }
            })}
          />
          <div> {errors?.phone && <p>{errors?.phone.message}</p>}</div>
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">Количество участников</label>
          <input type="number" id="person" placeholder="Количество участников"
            {...register('peopleCount', {
              required: 'Поле обязательно к заполнению',
              min: {
                value: minPerson,
                message: `Пожалуйста укажите большее количество участников, в данном квесте могут учатствовать от ${minPerson} человек`
              },
              max: {
                value: maxPerson,
                message: `Пожалуйста укажите меньшее количество участников, в данном квесте могут учатствовать до ${maxPerson} человек`
              }
            })}
          />
          <div> {errors?.peopleCount && <p>{errors?.peopleCount.message}</p>}</div>
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input type="checkbox" id="children" {...register('withChildren')} />
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
