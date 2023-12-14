import type { MapCategory } from '../lib/types';

export default {
  id: 'medical',
  label: 'Медицина',
  icon: 'islands#blueMedicalIcon',
  type: 'category',
  items: [
    {
      id: 'medical-center',
      label: 'Медицинские центры',
      type: 'category',
      items: [
        {
          label: 'Zarmed',
          location: [39.648798, 66.946819],
          tags: ['medical-lab'],
          address: 'Исаева 16',
          yandexMap: 'https://yandex.uz/maps/org/13540443235/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001080667402',
          googleMap: 'https://maps.app.goo.gl/DE7PREqoRTmq4YET9',
          instagram: 'https://www.instagram.com/zarmed.uz/',
          facebook: 'https://www.facebook.com/zarmed.uzbekistan',
          phones: [
            '+998 (95) 508-14-48',
            '+998 (55) 702-10-63',
            '+998 (95) 401-33-33',
          ],
          description:
            'Достаточно хороший медицинский центр, много хороших отзывов ' +
            'среди релокантов. Очень хвалят терапевта Кадырову Елену ' +
            'Кимовну.',
        },
        {
          label: 'STD',
          location: [39.656354, 66.960575],
          tags: ['medical-lab'],
          address: 'Юсуфа Хамадани 40б',
          yandexMap: 'https://yandex.uz/maps/org/100548269624/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001077804092/firm/70000001077804093/',
          googleMap: 'https://maps.app.goo.gl/L6tv4C6JknpwBGGo9',
          instagram: 'https://www.instagram.com/samarkand.std.uz/',
          facebook: 'https://www.facebook.com/samtibdiag.uz',
          phones: [
            '+998 (66) 233-93-33',
            '+998 (66) 233-05-33',
            '+998 (97) 923-01-02',
          ],
          description: 'Неплохой медицинский центр. Подешевле, но и попроще.',
        },
      ],
    },
    {
      id: 'medical-lab',
      label: 'Лаборатории',
      type: 'category',
      items: [
        {
          label: 'Swiss Lab',
          location: [39.665688, 66.948338],
          yandexMap: 'https://yandex.uz/maps/org/swiss_lab/176261762662/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001077486558',
          web: 'https://analizy.uz/',
          telegram: 'https://www.facebook.com/AnalizySwissLab',
          instagram: 'https://instagram.com/analizyswisslab',
          facebook: 'https://www.facebook.com/AnalizySwissLab',
          openHours: [{ time: '7:00 - 17:00' }],
          phones: ['+998 (55) 701‒00‒06', '+998 (71) 207-65-56'],
          description:
            'Одна из лучших лабораторий в городе. Рано открывается, нет ' +
            'очередей, профессионально берут кровь из вены.',
        },
        {
          label: 'Doctor Medical Centre',
          location: [39.665688, 66.948338],
          yandexMap: 'https://yandex.uz/maps/-/CDeP7S5R',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001079960585/',
          googleMap: 'https://maps.app.goo.gl/h4JFSQeFD9dnrL988',
          web: 'https://analizy.uz/',
          telegram: 'https://www.facebook.com/AnalizySwissLab',
          instagram: 'https://instagram.com/analizyswisslab',
          facebook: 'https://www.facebook.com/AnalizySwissLab',
          openHours: [{ time: '7:00 - 19:00' }],
          phones: [
            '+998 (66) 233‒56‒38',
            '+998 (90) 505‒66‒33',
            '+998 (90) 505‒44‒44',
          ],
          description:
            'Nikolay Borovik: У них очень въедливая и внимательная ' +
            'начальница лаборатории. Можно смело рекомендовать. Цены ' +
            'средние по Самарканду.',
        },
      ],
    },
    {
      id: 'otorhinolaryngology',
      label: 'Лор центры',
      type: 'category',
      items: [
        {
          label: 'Orlmed',
          location: [39.658908, 66.951859],
          address: 'М. Кошгари 27',
          yandexMap: 'https://yandex.uz/maps/org/38827164580/',
          twoGis:
            'https://2gis.uz/samarkand/branches/70000001077344710/firm/70000001077344711/',
          googleMap: 'https://maps.app.goo.gl/79fYQXwMuCpvfNCF8',
          web: 'https://www.orlmed.uz/',
          instagram: 'https://instagram.com/orl.med/',
          facebook: 'https://www.facebook.com/lorcenterorlmed/',
          openHours: [
            { time: '8:00 - 20:00' },
            { daysOfWeek: '7', time: '8:00 - 12:00' },
          ],
          phones: ['+998 (90) 276‒01‒80', '+998 (91) 546‒12‒21'],
          description: 'Часто слышу хорошие отзывы про этот лор центр.',
        },
        {
          label: 'Lor markaz',
          location: [39.680641, 66.935164],
          address: 'Рудаки 120а',
          yandexMap: 'https://yandex.uz/maps/org/210913988883/',
          twoGis: 'https://2gis.uz/samarkand/firm/70000001076936299/',
          openHours: [{ daysOfWeek: '1-6', time: '8:30 - 18:00' }],
          phones: ['+998 (90) 602‒85‒66', '+998 (93) 338‒81‒81'],
        },
      ],
    },
  ],
} satisfies MapCategory;
