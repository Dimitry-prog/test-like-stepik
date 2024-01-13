import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { code } = await request.json();

  if (!code) {
    return NextResponse.json({
      message: 'Missing required data',
      statusCode: 404,
    });
  }
  console.log(code);

  const data = {
    submissionResult: Math.random() < 0.5,
  };

  return NextResponse.json({
    data,
    statusCode: 200,
  });
};
