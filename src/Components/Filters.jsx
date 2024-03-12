import React from 'react'
import '../Css/Filters.css'
import Accordion from 'react-bootstrap/Accordion';
function Filters(props) {

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
      category:["red","blue","black"]
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

  var index = true;
  return (
    <>
        <Accordion defaultActiveKey="0">
          {
            filter.map((row)=>{
              return  <Accordion.Item eventKey={row.No}>
              <Accordion.Header>{row.title}</Accordion.Header>
              {
                row.category.map((e)=>{
                  return     <Accordion.Body onClick={() => { props.action(e) }} >{e}</Accordion.Body>
                })
              }
            </Accordion.Item>
            })
          }
    </Accordion>
    </>
  )
}

export default Filters
