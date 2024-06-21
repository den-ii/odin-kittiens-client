async function allKittens() {
  const response = await fetch("http://localhost:4000/", {
    cache: "no-store",
    next: { revalidate: 0 },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export default allKittens;
