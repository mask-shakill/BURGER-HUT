
import BestDeals from '@/components/BestFoodMenu/BestDeals';
async function getData() {
  const res = await fetch('http://localhost:3000/api/burgers')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}




const page =async () => {
  const data = await getData();
  return (
    <div>
        <BestDeals data={data}></BestDeals>
    </div>
  );
};

export default page;