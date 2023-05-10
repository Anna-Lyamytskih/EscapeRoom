import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BookingFormType, BookingItem } from '../../store/bookinng-process/booking-api';

export type BookingFormDateProps = {
  item: BookingItem;
  slotItem: 'today' | 'tomorrow';
  register: UseFormRegister<BookingFormType>;
  setValue: UseFormSetValue<BookingFormType>;
  control: Control<BookingFormType, unknown>;
};

const BookingFormDate = ({ register, item, slotItem, setValue, control }: BookingFormDateProps): JSX.Element => {
  const slots = item?.slots[slotItem];
  // const watchTime = useWatch({control, name: 'time'});

  return (
    <>
      {slots.map(
        ({ time, isAvailable }) => (
          <label className="custom-radio booking-form__date" key={`${item.id}--${slotItem}--${time}`}>
            <input
              type="radio"
              required
              disabled={!isAvailable}
              value={time}
              {...register('time', {
                onChange: () => {
                  setValue('date', slotItem, { shouldValidate: true });
                },
              })}
            />
            <span className="custom-radio__label">{time}</span>
          </label>
        )
      )}
    </>
  );
};
// <div className="booking-form__date-inner-wrapper">
//   <label className="custom-radio booking-form__date">
//     {placeTime?.map(
//       (time) => (
//         <label className="custom-radio booking-form__date">
//           <input
//             type="radio"
//             // id="today9h45m"
//             name="date"
//             required
//             // value="today9h45m"
//             disabled
//           />
//           <span className="custom-radio__label">{time.time}</span>
//         </label>
//       )
//     )}
//   </label>
// </div>

export default BookingFormDate;
