import Link from 'next/link';
import productConfig from "../../public/productConfig.json";
import Hero from '../components/ui/Hero';
const pc = JSON.parse(JSON.stringify(productConfig));
function Home() {

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className='home-body'>
      <Hero title="NEW METAL" description="Accessori per vetri temperati" showButton={false}></Hero>
      {/* <main className='categories-wrapper'>
        {Object.keys(pc).filter(Boolean).map((category: string, idx: number) =>
        <Link key={idx} href={"/" + category}>
          <div className="category-title_wrapper">
             <h3 className="category-title inter">{category}</h3>
          </div>
          </Link>
        )}
      </main> */}

      <main className='wip'>
        <h1 className='inter'>COMING SOON</h1>
        <p className='inter'>ARRIVIAMO PRESTO</p>
      </main>
    </div>
  )
}

export default Home