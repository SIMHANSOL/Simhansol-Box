import type { IncomingMessage, ServerResponse } from 'http';
import type { PreviewData } from 'next';
import type { NextApiRequestCookies } from 'next/dist/server/api-utils';
import type { ParsedUrlQuery } from 'querystring';

export type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
  res: ServerResponse;
  params?: Q;
  query: ParsedUrlQuery;
  preview?: boolean;
  previewData?: PreviewData;
  resolvedUrl: string;
  locale: string;
  locales?: string[];
  defaultLocale?: string;
};
