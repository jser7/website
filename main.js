function myFunction(x) {
    x.classList.toggle("change");
    if (getCookie("stylemode") == "light") {
      document.getElementById("style").href="mainstylealt.css"
      document.cookie = "stylemode=alt";
  } else if (getCookie("stylemode") == "alt") {
      document.getElementById("style").href="main.css"
      document.cookie = "stylemode=dark";
  } else if (getCookie("stylemode") == "dark") {
      document.getElementById("style").href="mainstylealt2.css"
      document.cookie = "stylemode=alt2";
  } else if (getCookie("stylemode") == "alt2") {
      document.getElementById("style").href="mainstylelight.css"
      document.cookie = "stylemode=light";
  } else if (!getCookie("stylemode")) {
      document.getElementById("style").href="main.css"
      document.cookie = "stylemode=dark";
  }
  }

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
  
  const style = getCookie("stylemode");
  if (document.cookie == "stylemode=undefined") {
    document.cookie = "stylemode=dark"
  }

function checkPref(){
    console.log(getCookie("stylemode"))
    if (getCookie("stylemode") == "dark") {
        document.getElementById("style").href="main.css"
    } else if (getCookie("stylemode") == "light") {
        document.getElementById("style").href="mainstylelight.css"
    } else if (getCookie("stylemode") == "alt2") {
        document.getElementById("style").href="mainstylealt2.css"
    } else if (getCookie("stylemode") == "alt") {
        document.getElementById("style").href="mainstylealt.css"
    }

    let cookieClickElement = document.getElementsByClassName("cookie-click")[0];
    if (cookieClickElement) {
        updateCookieCount()
    }
}
