// import React, { useState, useEffect } from "react";
// import FbImageLibrary from "react-fb-image-grid";
// import "./index.css";

// function FbPost() {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     allData();
//   }, []);

//   function allData() {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((res) => {
//         setList(res.products);
//         console.log(list);
//       });
//   }

//   if (!list) {
//     return <div>...loading</div>;
//   }

//   return (
//     <div>
//       {list.map((item) => (
//         <div key={item.id} className="ProfileContainer">
//           <div className="p-work">
//             <div className="Profile">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y0BZfL4NOoKC6DfTdmCmrhLJX4gP_iBoqg&usqp=CAU"
//                 alt=""
//               />
//               <h1 className="title">{item.title}</h1>
//             </div>
//           </div>
//           <p>{item.description}</p>
//           <div className="main-Img">
//             {item.images && <FbImageLibrary images={item.images} />}
//           </div>
//           <div className="hero-main">
//             <i className="fa-regular fa-thumbs-up"></i>
//             <i className="fa-regular fa-comment"></i>
//             <i className="fa-solid fa-share"></i>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FbPost;
import React, { useState, useEffect } from "react";
import FbImageLibrary from "react-fb-image-grid";
import "./index.css";

function FbPost() {
  const [list, setList] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [laughedItems, setLaughedItems] = useState([]);

  useEffect(() => {
    allData();
  }, []);

  function allData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setList(res.products);
        console.log(list);
      });
  }

  const handleLike = (itemId) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.includes(itemId)) {
        return prevLikedItems.filter((id) => id !== itemId);
      } else {
        return [...prevLikedItems, itemId];
      }
    });
  };

  const handleLaugh = (itemId) => {
    setLaughedItems((prevLaughedItems) => {
      if (prevLaughedItems.includes(itemId)) {
        return prevLaughedItems.filter((id) => id !== itemId);
      } else {
        return [...prevLaughedItems, itemId];
      }
    });
  };

  if (!list) {
    return <div>...loading</div>;
  }

  return (
    <div>
      {list.map((item) => (
        <div key={item.id} className="ProfileContainer">
          <div className="p-work">
            <div className="Profile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Y0BZfL4NOoKC6DfTdmCmrhLJX4gP_iBoqg&usqp=CAU"
                alt=""
              />
              <h1 className="title">{item.title}</h1>
            </div>
          </div>
          <p>{item.description}</p>
          <div className="main-Img">
            {item.images && <FbImageLibrary images={item.images} />}
          </div>
          <div className="hero-main">
            <button className="like-btn" onClick={() => handleLike(item.id)}>
              Like
            </button>
            <button className="laugh-btn" onClick={() => handleLaugh(item.id)}>
              Laugh
            </button>
            <button className="comment-btn">Comment</button>
            <button className="share-btn">Share</button>
            <span className="emojis">
              {likedItems.includes(item.id) ? "❤️" : null}{" "}
              {laughedItems.includes(item.id) ? "😄" : null}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FbPost;
