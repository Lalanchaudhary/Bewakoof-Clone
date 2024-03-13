import React, { useState } from 'react'
import MenOutput from '../Components/MenOutput';
import Filters from '../Components/Filters';
import {Container } from 'react-bootstrap';
import '../ViewsCSS/Men.css'
function Women() {

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
                "3XL",
                "28",
                "30",
                "32",
                "34",
                "36",
                "38",
                "40",
                "42",
                "44",
                "46",
                "48",
                "50"]
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
                image: "https://images.bewakoof.com/t640/women-s-black-illusion-graphic-printed-oversized-t-shirt-630875-1707367535-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-black-cat-o-clock-graphic-printed-oversized-t-shirt-630879-1707367806-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-black-delulu-come-trululu-graphic-printed-oversized-t-shirt-625824-1699441686-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-black-best-of-frenimies-graphic-printed-oversized-short-top-624726-1705905838-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-black-killer-queen-graphic-printed-oversized-t-shirt-625805-1699360142-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-black-catsronaut-graphic-printed-oversized-t-shirt-625836-1699360709-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "black"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-blue-one-piece-graphic-printed-oversized-t-shirt-630638-1709105383-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-blue-weekend-mood-tom-graphic-printed-slim-top-612448-1693835056-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-it-s-a-deal-boyfriend-fit-t-shirt-624160-1701116589-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-blue-wide-leg-high-rise-jeans-bleach-blue-625174-1709187672-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-beige-blue-oversized-t-shirt-dress-614099-1706768580-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-blue-oversized-parachute-pants-ashley-blue-628761-1707312454-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "blue"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-red-lovestruck-graphic-printed-oversized-t-shirt-630615-1706176717-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },
            {
                image: "https://images.bewakoof.com/t640/sarcastic-one-boyfriend-women-s-t-shirt-dl-386575-1655748162-5.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-red-boyfriend-t-shirt-170465-1658918699-5.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },
            {
                image: "https://images.bewakoof.com/t640/women-s-red-emotional-baggage-graphic-printed-oversized-t-shirt-584926-1702362633-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },
            {
                image: "https://images.bewakoof.com/t640/women-stay-classy-minnie-dl-boyfriend-fit-t-shirt-624156-1701113500-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },
            {
                image: "https://images.bewakoof.com/t640/women-dammit-jim-graphic-printed-oversized-t-shirt-32-585767-1681281495-1.jpg",
                title: "Bewakoof X One Piece",
                disc: "Men's Black Straw Hat Crew Graphic Printed Oversized T-shirt",
                price: "₹799",
                type: "100% Cotton",
                color: "red"
            },

        ]);


    const Reduce = (event) => {
        const items = products.filter((e) => {
            if (e.color == event) {
                return e;
            }
        })
        setProducts(items);
        console.log(event);
    }
    if (products.length < 7) {
        document.querySelector(".filters").classList.add("filters2")
    }

    return (
        <div>
            <Container className='my-4 home'>Home  /  Clothing</Container>
            <Container className='my-4 mens'><h2>Womens Clothing <span className='text-secondary'>({products.length})</span></h2></Container>
            <Container className='container-div'>
                <div className='filters'>
                    <p className='para'>Filters</p>
                    <Filters action={Reduce} data={filter} />
                </div>
                <div className='Output-div'>
                    {
                        products.map((row) => {
                            return <MenOutput data={row} />
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Women
