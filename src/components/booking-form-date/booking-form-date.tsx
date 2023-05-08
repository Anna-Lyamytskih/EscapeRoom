export type BookingFormDateProps = {
  placeTime: [{
    time: string;
    isAvailable: boolean;
  }] | undefined;
};

const BookingFormDate = ({ placeTime }: BookingFormDateProps) => {
  console.log(placeTime)
  return (
    <div className="booking-form__date-inner-wrapper">
      <label className="custom-radio booking-form__date">
        {placeTime?.map((time) => (<label className="custom-radio booking-form__date">
          <input type="radio" id="today9h45m" name="date" required value="today9h45m" disabled /><span className="custom-radio__label">{time.time}</span>
        </label>))}
      </label>
    </div>
  );
}
export default BookingFormDate;
