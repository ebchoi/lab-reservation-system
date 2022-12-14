export const DIRECTORY_DATA = {
  '/': '예약',
  '/reserve': '등록',
  '/find-reservation': '조회',
};

const TYPES = { reservationTypes: ['초진', '재진', '상담', '서류'] };

const STATUS = {
  reservationStatus: ['예약', '노쇼', '완료'],
};

export const RESERVATIONDATA = [
  {
    id: '1',
    clientName: '김민수',
    clientNumber: '01095223513',
    type: '초진',
    date: '2022-10-17',
    startTime: '4:30',
    reservationStatus: '예약',
  },
  {
    id: '2',
    clientName: '최사비',
    clientNumber: '01084560801',
    type: '재진',
    date: '2022-10-16',
    startTime: '3:00',
    reservationStatus: '노쇼',
  },
  {
    id: '3',
    clientName: '김연아',
    clientNumber: '01012341232',
    type: '상담',
    date: '2022-10-15',
    startTime: '2:00',
    reservationStatus: '완료',
  },
  {
    id: '4',
    clientName: '손흥민',
    clientNumber: '01012341233',
    type: '서류',
    date: '2022-10-22',
    startTime: '5:00',
    reservationStatus: '예약',
  },
  {
    id: '5',
    clientName: '김아무게',
    clientNumber: '01012341235',
    type: '예약',
    date: '2022-10-30',
    startTime: '1:00',
    reservationStatus: '초진',
  },
  {
    id: '6',
    clientName: '아재현',
    clientNumber: '01025323413',
    type: '초진',
    date: '2022-10-17',
    startTime: '4:30',
    reservationStatus: '예약',
  },
  {
    id: '7',
    clientName: '사무엘',
    clientNumber: '01084580801',
    type: '재진',
    date: '2022-10-16',
    startTime: '3:30',
    reservationStatus: '노쇼',
  },
  {
    id: '8',
    clientName: '김태희',
    clientNumber: '01012347232',
    type: '상담',
    date: '2022-10-15',
    startTime: '2:30',
    reservationStatus: '완료',
  },
  {
    id: '9',
    clientName: '저스트',
    clientNumber: '01012341253',
    type: '서류',
    date: '2022-10-22',
    startTime: '5:30',
    reservationStatus: '예약',
  },
  {
    id: '10',
    clientName: '김아게',
    clientNumber: '01012311235',
    type: '예약',
    date: '2022-10-30',
    startTime: '1:30',
    reservationStatus: '초진',
  },
];
