import react,{useState, useEffect} from 'react';
const Test = () => {
   const [num, setNum]=useState(0);
   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [items, setItems] = useState([]);
    const inc=()=>{
       setNum(num+1);
    }
    const dec=()=>{
       setNum(num-1);
    }
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
           
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }

    //   return (
    //     <div>
    //       <div>{num} </div>
    //        <button onClick={inc}>+</button>
    //        <button onClick={dec}>-</button>
    //     </div>
    // );
}

export default Test;