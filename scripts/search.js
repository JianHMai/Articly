let parameters=location.search.substring(1).split("&");
let temp = parameters[0].split("=");
let l=unescape(temp[1]);
let searchValue= '+';
let str = l.replace(searchValue, "-");