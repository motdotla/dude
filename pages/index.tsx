import * as dotenvx from '@dotenvx/dotenvx';

export default function Page({ hello }: { hello: string }) {
  return <h1>Hello {hello}</h1>;
}

export function getServerSideProps() {
  const hello = dotenvx.get('HELLO')

  return {
    props: {
      hello,
    },
  };
}
