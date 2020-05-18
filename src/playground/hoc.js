// Higher Order Component(HOC) => A component (HOC) that renders another component
// uses of HOC
// Reuse code
// Render Hijacking
//prop manipulation
// abstract state



import React from 'react';
import ReactDOM from 'react-dom';



const Info = (props) => (
<div>
<h1> Info: </h1>
<p>The info is :{props.info} </p>
</div>
);

const withAdminWarning = (WrappedComponent)=> {

    return (props) => (
   <div>
  
   {props.isAdmin &&  <p>This is a private Info: please don't share it.. </p>}
   <WrappedComponent {...props} />
   </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo isAdmin={true } info="There are some details" /> , document.getElementById('app'));