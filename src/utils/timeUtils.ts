
export const generateTimeSlots = (serviceDuration: number) => {
  const slots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += serviceDuration) {
      if (hour === endHour && minute > 0) continue;
      
      const hourFormatted = hour.toString().padStart(2, '0');
      const minuteFormatted = minute.toString().padStart(2, '0');
      
      slots.push(`${hourFormatted}:${minuteFormatted}`);
    }
  }
  
  return slots;
};
