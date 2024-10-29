import Head from 'next/head';
import { useRouter } from 'next/router';

interface MetaProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Meta(props: MetaProps) {
  const { asPath } = useRouter();
  const { title, description = title, url = asPath, image = '/images/meta/box512x512.png' } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name={'description'}
        content={description}
      />

      <meta
        property={'og:title'}
        content={title}
      />
      <meta
        property={'og:description'}
        content={description}
      />
      <meta
        property={'og:url'}
        content={url}
      />
      <meta
        property={'og:image'}
        content={image}
      />

      <meta
        name={'twitter:title'}
        content={title}
      />
      <meta
        name={'twitter:description'}
        content={description}
      />
      <meta
        name={'twitter:url'}
        content={url}
      />
      <meta
        name={'twitter:image'}
        content={image}
      />
    </Head>
  );
}
