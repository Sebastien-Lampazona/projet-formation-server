import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import Calendar from 'dayjs/plugin/calendar';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import Duration from 'dayjs/plugin/duration';
import IsoWeek from 'dayjs/plugin/isoWeek';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import UpdateLocale from 'dayjs/plugin/updateLocale';
import Timezone from 'dayjs/plugin/timezone';
import Utc from 'dayjs/plugin/utc';

dayjs.extend(Calendar);
dayjs.extend(isSameOrBefore);
dayjs.extend(CustomParseFormat);
dayjs.extend(Duration);
dayjs.extend(IsoWeek);
dayjs.extend(LocalizedFormat);
dayjs.extend(UpdateLocale);
dayjs.extend(Timezone);
dayjs.extend(Utc);
dayjs.locale('fr');
dayjs.updateLocale('fr', {
  calendar: {
    lastDay: '[Hier à]',
    sameDay: "[Aujourd'hui]",
    nextDay: '[Demain]',
    lastWeek: 'dddd [dernier]',
    nextWeek: 'dddd',
    sameElse: 'L',
  },
});
dayjs.tz.setDefault('Europe/Paris');

export default dayjs;
