import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ height: '60px', zIndex: 1000, backgroundColor: '#fff', borderBottom: '1px solid #d4d4d5' }}>
      <div className="ui container center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h2 style={{ margin: 0 }}>Contact Manager</h2>
      </div>
    </div>
  );
}

export default React.memo(Header);