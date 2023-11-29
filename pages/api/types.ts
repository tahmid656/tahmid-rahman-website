import { IconType } from 'react-icons';

export interface Portfolio {
    id: number,
    imageUri: string,
    type: 'vid' | 'img',
    title: string,
    icons: IconType[],
    route: string | undefined,
    tag: typeof availableTags[number][];
};

export const availableTags: Array<'all' | 'app' | 'ui/ux' | 'logo' | 'brand identity' | 'animation' | 'creatives' | 'logo process' | 'videography' | 'mockup' | 'business card' | 'banner & poster' | 'art' | 'music'> = [
  'all',
  'app',
  'ui/ux',
  'logo',
  'brand identity',
  'animation',
  'creatives',
  'logo process',
  'videography',
  'mockup',
  'business card',
  'banner & poster',
  'art',
  'music',
];

