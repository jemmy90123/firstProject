import SubProducts from './SubProducts';

function Product() {
    const lists = [
        {id: 1, names: 'Laptop', count:5},
        {id: 2, names: 'Mobile', count:20},
        {id: 3, names: 'Tablet', count:15}
    ];
    return (
    <>
    <h1>My List</h1>
    <ul>
    {lists.map((list) => <SubProducts id={list.id} name={list.names} count={list.count}
    
    />)}
    
    </ul>
    </>
    );
    }

export default Product;