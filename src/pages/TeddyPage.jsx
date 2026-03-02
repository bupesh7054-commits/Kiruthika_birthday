// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./TeddyPage.css";

// export default function TeddyPage() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="teddy-container">
//       <div className="teddy">🧸</div>

//       {!open ? (
//         <div className="card" onClick={() => setOpen(true)}>
//           🎉 Happy Birthday 🎉
//         </div>
//       ) : (
//         <div className="card special">
//           You are very special 💕
//           <button onClick={() => navigate("/envelope")}>Special Message</button>
//         </div>
//       )}
//     </div>
//   );
// }
