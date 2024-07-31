import { Product } from "./Product";

const products = [
    {
        id: 1,
        title: 'Кокосовая матча',
        image: 'image/tea/photo-1.jpg',
        price: '390',
    },

    {
        id: 2,
        title: 'Зеленый индонезийский чай',
        image: 'image/tea/photo-2.jpg',
        price: '340',
    },

    {
        id: 3,
        title: 'Черный чай из Эфиопии',
        image: 'image/tea/photo-3.jpg',
        price: '380',
    },

    {
        id: 4,
        title: 'Черный чай из Калифорнии',
        image: 'image/tea/photo-4.jpg',
        price: '360',
    },

    {
        id: 5,
        title: 'Органическая веганская матча',
        image: 'image/tea/photo-5.jpg',
        price: '400',
    },

    {
        id: 6,
        title: 'Чай черный Лакандона',
        image: 'image/tea/photo-6.jpg',
        price: '390',
    },
]

export const Products = () => (
    <section className="products">
        <div className="container">
            <h2 className="products__title">Чай</h2>

            <ul className="products__list">
                {products.map((item) => (<Product key={item.id} data={item} />))}
            </ul>
        </div>
    </section>
)