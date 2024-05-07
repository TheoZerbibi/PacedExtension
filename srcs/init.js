const	portName	= (chrome.extension.inIncognitoContext ? "incog_comm" : "normal_comm");

const	today		= new Date();
const	weekStart	= new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
const	monthStart	= new Date(today.getFullYear(), today.getMonth(), 1);
