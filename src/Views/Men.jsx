import React, { useState } from 'react'
import MenOutput from '../Components/MenOutput';
import Filters from '../Components/Filters';
import { Container } from 'react-bootstrap';
import '../ViewsCSS/Men.css'
function Men() {

  const filter = [
    {
      No: 0,
      title: "Category",
      category: ["T-Shirt",
        "Boxer",
        "Vest",
        "Shirt",
        "Joggers",
        "Shorts",
        "Sweatshirt",
        "Hoodies",
        "Pyjama",
        "Jeans",
        "Jacket",
        "Co-Ordinates",
        "Track Pant",
        "Sweater",
        "Trousers",
        "Casual Pants",
        "Pant",
        "Tracksuit",
        "Kurta",
        "Protective Outdoor Mask",
        "Sweatshirt & Jogger Set",
        "Cloth Mask"]
    },
    {
      No: 1,
      title: "Sizes",
      category: ["XS",
        "S",
        "M",
        "L",
        "XL",
        "2XL",
        "3XL",]
    },
    {
      No: 2,
      title: "Brand",
      category: ["Bewakoof®",
        "Bewakoof Air® 1.0",
        "Campus Sutra",
        "Xyxx",
        "Rigo",
        "Bewakoof Heavy Duty® 1.0",
        "Urban Scottish",
        "Bushirt",
        "What's Down",
        "The Daily Outfits",
        "Indiclub",
        "Rodamo",
        "Door 74",
        "Bewakoof American Pima",
        "Difference Of Opinion",
        "Flynoff",
        " Mad Over Print",
        "Shopolics",
        "Dillinger",
        "Chkokko",
        "Dripcult",
        "East Coast Way",
        "Old Grey",
        "Smugglerz",
        "The Dry State",
        "Harpita",
        "Dimeh",
        "Olavi",
        "Kranium",
        "Trends Tower",
        "7 Shores",
        "Fans Army",
        "Urban Legends",
        "Brown Mocha",
        "Kotty",
        "Showoff",
        "Vyve",
        "Blanck",
        "Botnia",
        "Dropout Society",
        "The Bargain Street",
        "Weezy",
        "Belliskey",
        "Brown Brothers",
        "Truebuyworld",
        "Vibebling",

      ]
    },
    {
      No: 3,
      title: "Color",
      category: ["red", "blue", "black"]
    },
    {
      No: 4,
      title: "Design",
      category: ["Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots"]
    },
    {
      No: 5,
      title: "Fit",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 6,
      title: "Sleeve",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 7,
      title: "Neck",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 8,
      title: "Type",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 9,
      title: "Ratings",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 10,
      title: "Discount",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 11,
      title: "Sort By",
      category: ["hello", "Hii", "Bye"]
    },
  ]

  const [products, setProducts] = useState(
    [
      {
        image: "https://images.bewakoof.com/t640/men-s-black-straw-hat-crew-graphic-printed-oversized-t-shirt-630819-1708598320-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black",
        size: "S",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-black-one-piece-graphic-printed-oversized-t-shirt-630630-1709105339-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black",
        size: "S",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-black-foodie-deadpool-graphic-printed-oversized-acid-wash-t-shirt-633533-1708600144-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black",
        size: "M",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-brown-straw-hat-crew-graphic-printed-oversized-t-shirt-630812-1709105472-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black",
        size: "M",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-black-mugiwara-crew-graphic-printed-oversized-t-shirt-630813-1709116981-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black"
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-black-luffy-graphic-printed-oversized-t-shirt-630650-1709105021-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "black"
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-blue-going-merry-graphic-printed-oversized-t-shirt-630627-1709104777-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue"
      },
      {
        image: "https://images.bewakoof.com/t640/men-printed-co-ord-set-7-619985-1709805508-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue",
        size: "S",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-blue-luffy-graphic-printed-oversized-t-shirt-630647-1709105295-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue"
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-blue-boxer-628776-1707977242-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue",
        size: "S",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-navy-blue-relaxe-fit-cargo-pant-585697-1696326535-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue"
      },
      {
        image: "https://images.bewakoof.com/t640/men-solid-pyjamas-4-620062-1707200620-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "blue"
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-kung-fu-panda-graphic-printed-t-shirt-630761-1706686451-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red",
        size: "M",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-t-shirt-630777-1706686786-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red"
        
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-life-is-a-trip-graphic-printed-oversized-t-shirt-629310-1704450149-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red",
        size: "M",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-spaced-nasa-typography-t-shirt-475126-1706005918-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red",
        size: "L",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-weapon-xi-graphic-printed-oversized-t-shirt-604873-1690372836-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red",
        size: "S",
      },
      {
        image: "https://images.bewakoof.com/t640/men-s-red-moon-rider-graphic-printed-oversized-t-shirt-502017-1701423884-1.jpg",
        title: "Bewakoof X One Piece",
        disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
        price: "₹799",
        type: "100% Cotton",
        color: "red",
        size: "S",
      },

    ]);

  const Reduce = (title,event) => {
    console.log(title);
    console.log(event);
    var items;
    switch (title){
        case "Color":
           items = products.filter((e) => {
            if (e.color == event) {
              return e;
            }
          })
          setProducts(items);
            break;
        case "Sizes":
          items = products.filter((e) => {
            if (e.size == event) {
              return e;
            }
          })
          setProducts(items);
            break;
        case "sunflower":
            console.log("Sunflowers are yellow");
            break;
        default:
            console.log("Please select another flower");
    }
  }
  if (products.length < 7) {
    document.querySelector(".filters").classList.add("filters2")
  }
  return (
    <div>
      <Container className='my-4 home'>Home  /  Clothing</Container>
      <Container className='my-4 mens'><h2>Mens Clothing <span className='text-secondary'>({products.length})</span></h2></Container>
      <Container className='container-div'>
        <div className='filters'>
          <p className='para'>Filters</p>
          <Filters action={Reduce} data={filter}  />
        </div>
        <div className='Output-div'>
          {
            products.map((row) => {
              return <MenOutput data={row}  />
            })
          }
        </div>
      </Container>
    </div>
  )
}

export default Men
