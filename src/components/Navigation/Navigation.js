import './Navigation.css';

function Navigation() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let getCurrentTime = hour + ":" + minute;

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  if (month < 10) month = "0" + month;
  let getCurrentDate = day + "/" + month + "/" + year;
  


  return (
    <div className="navigation-container">
      <div className="navigation-item-container">
        <button className="navigation-item">Home</button>
        <button className="navigation-item">Search</button>
        <button className="navigation-item">App 1</button>
      </div>

      <div className="navigation-item-container">
        <button className="navigation-item">^</button>
        <button className="navigation-item">ENG</button>
        <button className="navigation-item">{getCurrentTime} {getCurrentDate}</button>
      </div>
    </div>
  );
}

export default Navigation;
