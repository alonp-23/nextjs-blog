import { parseISO, format } from 'date-fns';

export default ({ dateString }) => 
  <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>;