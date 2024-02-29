import { ImageResponse } from 'next/og';
import imgR from '/public/custom-head2.jpg'


export async function GET() {
  return new ImageResponse(
    (
      <></>
    ),
    {
      width: 1200,
      height: 400,
    },
  );
}