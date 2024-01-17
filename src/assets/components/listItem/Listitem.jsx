import CardItem from "../carditem/CardItem";

const Listitem = () => {
    return ( 
        <>
        <h1>Das ist ein List item compoment</h1>
        <CardItem
        title={"book 1"}
        img={"link"}
        price={"19.99"}
        />
        <CardItem
        title={"book 2"}
        img={"link"}
        price={"19.99"}
        />
        <CardItem
        title={"book 3"}
        img={"link"}
        price={"19.99"}
        />
        </>
     );
}
 
export default Listitem;