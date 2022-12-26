import moment from 'moment';
import { atom } from 'recoil';

export const aboutState = atom({
  key: 'aboutState',
  default: {
    content: '',
  },
});

export const careerState = atom({
  key: 'careerState',
  default: {
    company: '',
    employment_date: moment().format('YYYY.MM.DD'),
    end_date: moment().format('YYYY.MM.DD'),
    content: '',
    tasks: [
      {
        title: '',
        task: '',
      },
    ],
  },
});

export const projectState = atom({
  key: 'projectState',
  default: {
    title: '',
    content: '',
    img: '',
    link: '',
    date: moment().format('YYYY.MM.DD'),
    main_func: '',
    front: [{ stack: '' }],
    back: [{ stack: '' }],
    db: [{ stack: '' }],
  },
});

export const skillState = atom({
  key: 'skillState',
  default: {
    type: '',
    stacks: [
      {
        img: '',
        title: '',
      },
    ],
  },
});
