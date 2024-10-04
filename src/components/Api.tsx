import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

interface HeaderState {
  data: Product[] | null;
}

export default class Api extends Component<{}, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount(): void {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => this.setState({ data: res.data.products }));
  }

  render() {
    return (
      <div className="px-4 md:px-8 lg:px-16 dark:bg-gray-900 py-8 pt-[50px]">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {this.state.data?.map((item: Product) => (
            <li
              key={item.id}
              className="border cursor-pointer rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 p-4 text-white bg-white border-gray-300"
            >
              <Link
                to={`/about/${item.id}`}
                state={{ product: item }} 
                className="block"
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="mx-auto object-contain h-48 w-full rounded-lg mb-4"
                />
                <p className="font-semibold text-lg text-black line-clamp-1 mb-2">
                  {item.title}
                </p>
                <p className="text-gray-600 pb-2">Price: ${item.price}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}