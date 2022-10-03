export async function getData() {
  const response = await fetch('data.json', {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  });
  const data = await response.json();

  return data;
}
