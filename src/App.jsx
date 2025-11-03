import './App.css'

import { useState } from 'react'

// const fruits_arr = ['Mango', 'Orange', 'PawPaw', 'Pineapple'];

// function ArrayMap (){
//   return (
//     <>
//       {fruits_arr.map(list_fruits => {
//         return (
//           <ul key={list_fruits}>
//             <li>
//               {list_fruits}
//             </li>
//           </ul>
//         )
//       })}
//     </>
//   )
// }

// // A simple profile object with image features and a short bio
// const profile = {
//   imageUrl: 'https://i.pravatar.cc/200?img=5', // placeholder avatar service
//   imageTitle: 'Profile picture of Emmanuel',
//   imageName: 'Emmanuel O',
//   size: { width: 120, height: 120 },
//   title: 'Frontend Developer',
//   bio: 'Passionate about building user-friendly apps. Loves JavaScript, React and teaching others.'
// }

// function ProfileCard({ profile }){
//   const { imageUrl, imageTitle, imageName, size, title, bio } = profile

//   const imgStyles = {
//     width: size.width,
//     height: size.height,
//     borderRadius: '50%',
//     objectFit: 'cover',
//     boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
//   }

//   const cardStyles = {
//     display: 'flex',
//     gap: '16px',
//     alignItems: 'center',
//     padding: '12px',
//     border: '1px solid #eee',
//     borderRadius: '8px',
//     maxWidth: '460px',
//     background: '#fff'
//   }

//   return (
//     <article style={cardStyles} aria-label="profile-card">
//       <img src={imageUrl} alt={imageTitle} title={imageTitle} style={imgStyles} />
//       <div>
//         <h3 style={{margin: '0 0 6px 0'}}>{imageName}</h3>
//         <p style={{margin: '0 0 8px 0', color: '#555'}}><strong>{title}</strong></p>
//         <p style={{margin: 0, color: '#333'}}>{bio}</p>
//       </div>
//     </article>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>Hello World!</h1>

//       <section style={{margin: '20px 0'}}>
//         <Description/>
//       </section>

//       <section style={{margin: '20px 0'}}>
//         <ProfileCard profile={profile} />
//       </section>

//       <section style={{margin: '20px 0'}}>
//         <ArrayMap/>
//       </section>
//     </>
//   )
// }

// function Description (){
//   return(
//     <h2>This is my first application</h2>
//   )
// }

function Square({value, onClickSquare}){

  return(
    <>
     <button className='square' onClick={onClickSquare}>

        {value}

      </button>
    </>
  )
}

export default function Board(){
 
  const [xplayer, setXplayer] = useState(true)// set first player to X
  // useState for X
  const [squareValue, setSquareValue] = useState(Array(9).fill(null))



  const winner = determineWinner(squareValue)

  let checkStatus;
  if (winner){
    checkStatus = `The winner is ${winner}`
  } else{
    checkStatus = xplayer ? 'X' : 'O';
  }
  function handleClick(i){

    if (squareValue[i] || determineWinner(squareValue)){
      return;
    }
   
   const copySquareValue = [...squareValue]

   //useState for  x and o
  copySquareValue[i] = xplayer ? 'X' : 'O';

    setXplayer(!xplayer);
    setSquareValue(copySquareValue);



  }


  return(
    <>
    <div className='status'>{checkStatus}</div>
    <div className='board-row'>
    <Square value={squareValue[0]}  onClickSquare={()=> handleClick(0)}/>
     <Square value={squareValue[1]}  onClickSquare={()=> handleClick(1)}/>
     <Square value={squareValue[2]}  onClickSquare={()=> handleClick(2)}/>
    </div>
    <div className='board-row'>
     <Square value={squareValue[3]}  onClickSquare={()=> handleClick(3)}/>
     <Square value={squareValue[4]}  onClickSquare={()=> handleClick(4)}/>
     <Square value={squareValue[5]}  onClickSquare={()=> handleClick(5)}/>
    </div>
    <div className='board-row'>
      <Square value={squareValue[6]}  onClickSquare={()=> handleClick(6)}/>
     <Square value={squareValue[7]}  onClickSquare={()=> handleClick(7)}/>
     <Square value={squareValue[8]}  onClickSquare={()=> handleClick(8)}/>
    </div>
    
    </>
  )
}


function determineWinner(squares){
  
  const possibleOutcome = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  for (let i = 0; i < possibleOutcome.length; i++){
    const [a,b,c] = possibleOutcome[i]
     
    if (squares[a]===squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }

  }
  return null;
}