const getScrollingText = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/scrolling`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

export default getScrollingText;
