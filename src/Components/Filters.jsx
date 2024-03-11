import React from 'react'
import '../Css/Filters.css'
function Filters(props) {

  const filter = [
    {
      No:0,
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
      No:1,
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
      No:2,
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
      No:3,
      title: "Color",
      category: ["red", "blue", "black"]
    },
    {
      No:4,
      title: "Design",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:5,
      title: "Fit",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:6,
      title: "Sleeve",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:7,
      title: "Neck",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:8,
      title: "Type",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:9,
      title: "Ratings",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:10,
      title: "Discount",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No:11,
      title: "Sort By",
      category: ["hello", "Hii", "Bye"]
    },
  ]

  var index=true;
  return (
    <div>
      {
        filter.map((row) => {
          return <div onClick={()=>{
            if(index==true)
            {
                document.querySelectorAll(".tags")[row.No].classList.add("tags2");
                index=false;
            }
            else
            {
              document.querySelectorAll(".tags")[row.No].classList.remove("tags2");
              index=true;
            }
                
            console.log(row.No)

          }} className='tags'>
            <p>{row.title}</p>
            <div className='inner'>
              {row.category.map((e) => {
                return <p onClick={()=>{props.action(e)}} className='inner-para'>{e}</p>
              })}
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Filters
