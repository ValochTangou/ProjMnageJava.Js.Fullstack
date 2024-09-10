import React from 'react';

function Overview() {
   return (
     <div className="overview">

       <div className="task-summary">
         <div className="task upcoming">Upcoming Tasks (30%)</div>
         <div className="task in-progress">In Progress (60%)</div>
          <div className="task completed">Completed (60%)</div>
       </div>

       <div className="recent-conversations">
       </div>
     </div>
   );
}

export default Overview;