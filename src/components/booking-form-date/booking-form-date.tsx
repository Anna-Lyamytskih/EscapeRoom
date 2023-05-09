import { BookingItem } from '../../store/bookinng-process/booking-api';

export type BookingFormDateProps = {
  item: BookingItem;
  slotItem: 'today' | 'tomorrow';
};

const BookingFormDate = ({ item, slotItem }: BookingFormDateProps): JSX.Element => {
  const slots = item?.slots[slotItem];

  return (
    <>
      {slots.map(
        ({ time, isAvailable }) => (
          <label className="custom-radio booking-form__date" key={`${item.id}--${slotItem}--${time}`}>
            <input
              type="radio"
              name="date"
              required
              disabled={!isAvailable}
              key={time}
            // {...register('date.today'), {
            //   value: true,
            //   message: `${time}`
            // }}
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
