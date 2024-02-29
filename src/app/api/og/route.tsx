import { ImageResponse } from 'next/og';

export async function GET() {
  const imgUrl = new URL('../../../public/custom-head2.jpg', import.meta.url).href
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={'https://vercel-nu-six-90.vercel.app/header.png'} alt='werw' />
    ),
    {
      width: 1200,
      height: 400,
    },
  );
}