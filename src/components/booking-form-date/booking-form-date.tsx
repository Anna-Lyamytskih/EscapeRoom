import { Control, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { BookingFormType, BookingItem } from '../../store/bookinng-process/booking-api';

export type BookingFormDateProps = {
  item: BookingItem;
  slotItem: 'today' | 'tomorrow';
  register: UseFormRegister<BookingFormType>;
  setValue: UseFormSetValue<BookingFormType>;
  control: Control<BookingFormType, unknown>;
};

const BookingFormDate = ({ register, item, slotItem, setValue }: BookingFormDateProps): JSX.Element => {
  const slots = item?.slots[slotItem];

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

export default BookingFormDate;
