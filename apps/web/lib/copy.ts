import copy from '../../../content/site-copy.json';

// Only approved public copy enters this shell. No private resource loaders.
export { copy };
export const routes = {
  rights: copy.pages.rights,
  questions: copy.pages.questions,
  support: copy.pages.support,
  share: copy.pages.share,
  'get-involved': copy.pages.help,
  stories: copy.pages.stories,
  about: copy.pages.about,
  privacy: copy.pages.privacy,
  'editorial-standards': {
    title: 'Clarity. Evidence. Accountability.',
    intro: copy.pages.about.accountabilityBody,
  },
  contact: {
    title: 'Contact HEARD',
    intro: 'Contact and support services are not available in this engineering preview. Please do not send personal or sensitive information.',
  },
} as const;

export function isPublicPath(path: string): path is keyof typeof routes {
  return Object.hasOwn(routes, path);
}
