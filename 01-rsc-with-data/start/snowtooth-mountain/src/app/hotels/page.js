// this is the Page for the Hotels server component

import HotelBlock from "./HotelBlock";

async function getData() {
  const res = await fetch(
    "https://snowtooth-hotel-api.fly.dev"
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div className="grid grid-cols-3 gap-4">
        {data.map((hotel) => (
          <HotelBlock
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            capacity={hotel.capacity}
          />
        ))}
      </div>
    </main>
  );
}