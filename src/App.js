import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import ProductGrid from './components/products/ProductGrid';
import Search from './components/ui/Search'
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery]= useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
      const result = await axios(`http://www.mec.ca/api/v1/products/search?keywords=${query}`)
      setItems(result.data.products)
      setIsLoading(false)
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems()
  }, [query])


  return ( 
    <div className="container">
     <Header />
     <Search getQuery={(q) => setQuery(q)} />
    {!!query && query.length && !!items && <p className="query-string">Products matching '{query}'</p>}
    {!isLoading && !items && <p className="query-string">No Products Match '{query}'</p>}
     <ProductGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
